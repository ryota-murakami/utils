#!/bin/bash

# Get version number
NEW_VERSION=$(cat ./pom.xml | grep -o '<version>[0-9\.]*[A-Z\-]*</version>' | sed -e 's/<[\/]*version>//g' | sed ':a;N;$!ba;s/\n/ /g' | sed 's/[A-Z\-]*//g' | awk '{printf $1}')
export NEW_VERSION

# Check if there are pending issues on this release. If pending issues, break the release
pending_issues=$(curl --header "Authorization: Bearer ${2}" -s "${1}/issues_statistics?milestone=${NEW_VERSION}" | jq --raw-output '.statistics.counts.opened')
if [[ ${pending_issues} -gt 0 ]]
then
  echo "Breaking release, there are still ${pending_issues} issues set to version ${NEW_VERSION}."
  echo "Finish them or move them to another milestone."
  exit 1
fi

# Get merge requests and transforms into changelog
echo "Generating changelog for version $NEW_VERSION"
currentDate=$(date +%d/%m/%Y)
changelog=$(curl --header "Authorization: Bearer ${2}" -s "${1}/merge_requests?milestone=${NEW_VERSION}&state=merged&per_page=200" | jq --raw-output 'map("- " + (if (.labels | map(select(. == "has impacts")) | length == 1) then "**[HAS IMPACTS]** " else "" end) + (.title | gsub("Resolve ";"") | gsub("\"";"")) + ". [MR #" + (.iid | tostring) + "](" + .web_url + ") (" + .merged_by.name + ")") | join("\n")')
changelogText=$(printf "\n# Changelog for ${3} ${NEW_VERSION}\n*${currentDate}*\n\n${changelog}\n\n")
echo "$changelogText"

# Generate changelog
echo "$changelogText" > changelogUpdate && cat changelogUpdate ./CHANGELOG.md > allChangelog && rm changelogUpdate && mv allChangelog ./CHANGELOG.md && echo "Generated changelog file at ./CHANGELOG.md"

# Close the current milestone
milestone_id=$(curl --header "Authorization: Bearer ${2}" -s "${1}/milestones?title=${NEW_VERSION}" | jq --raw-output '.[].id')
status=$(curl -X PUT -H "Content-Type: application/json" --header "Authorization: Bearer ${2}" -s "${1}/milestones/${milestone_id}" -d "{\"id\": \"${1}\",\"milestone_id\": ${milestone_id},\"state_event\": \"close\"}" | jq --raw-output '.state')
echo "Milestone ${NEW_VERSION} is now ${status}"
echo ""