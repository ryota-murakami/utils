#!/bin/bash

# Get version number
new_version=$(cat ./pom.xml | grep -o '<version>[0-9\.]*[A-Z\-]*</version>' | sed -e 's/<[\/]*version>//g' | sed ':a;N;$!ba;s/\n/ /g' | sed 's/[A-Z\-]*//g' | awk '{printf $1}')
echo "Sending release mail for version ${new_version}"

curl --request POST \
     --url https://api.mailersend.com/v1/email \
     --header "Authorization: Bearer ${1}" \
     --header "Content-Type: application/json" \
     --header "X-Requested-With: XMLHttpRequest" \
     --data "{\"from\": {\"email\": \"${2}\", \"name\": \"AWE Team\"}, \"to\": [{\"email\": \"${3}\"}], \"template_id\": \"${4}\", \"variables\": [{\"email\":\"${3}\", \"substitutions\": [{\"var\": \"version\",\"value\": \"${new_version}\"}]}]}"
