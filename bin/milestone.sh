#!/bin/bash

# Generate milestone function
function generate_milestone {
  status=$(curl -X POST -H "Content-Type: application/json" --header "Authorization: Bearer ${2}" -s "${1}/milestones" -d "{\"id\": \"${1}\",\"title\": \"${3}\",\"description\": \"${4}\"}" | jq --raw-output '.state')
  if [[ "${status}" == "null" ]]
  then
    echo "Milestone ${3} already exists."
  else
    echo "Milestone ${3} has been generated."
    echo "Current status is ${status}"
  fi
  echo ""
}

# Get version number
new_version=$(cat ./pom.xml | grep -o '<version>[0-9\.]*[A-Z\-]*</version>' | sed -e 's/<[\/]*version>//g' | sed ':a;N;$!ba;s/\n/ /g' | sed 's/[A-Z\-]*//g' | awk '{printf $1}')
echo "Generating new milestone for version ${new_version}"

# Get next major and minor versions number
IFS='.' read -r -a version <<< "${new_version}"
major=${version[0]}
minor=${version[1]}
next_major=$((major + 1))
next_minor=$((minor + 1))
next_major_version="${next_major}.0.0"
next_minor_version="${major}.${next_minor}.0"

# Generate next bugfix milestone
generate_milestone "${1}" "${2}" "${new_version}" "Bug fixes and minor improvements"

# Generate next minor version
generate_milestone "${1}" "${2}" "${next_minor_version}" "Minor features and improvements"

# Generate next major version
generate_milestone "${1}" "${2}" "${next_major_version}" "Big features and breaking changes"
