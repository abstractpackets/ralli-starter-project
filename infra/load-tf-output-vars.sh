#! /bin/bash

export red="\033[1;31m"
export green="\033[1;32m"
export yellow="\033[1;33m"
export blue="\033[1;34m"
export purple="\033[1;35m"
export cyan="\033[1;36m"
export grey="\033[0;37m"
export reset="\033[m"

# if [ -z "$AWS_REGION" ]; then
#     echo -en "${green} What is your AWS Region? (format: us-east-1)${reset}: "
#     read -r AWS_REGION
#     export AWS_REGION    
# fi
AWS_REGION=$(terraform output -raw aws_region)
export AWS_REGION
COGNITO_USER_POOL=$(terraform output -json | jq -r '.[]|select(.value | startswith("us-east-1_"))'.value)
export COGNITO_USER_POOL
COGNITO_CLIENT_ID=$(terraform output -raw cognito_client_id)
export COGNITO_CLIENT_ID

echo -n "" > react.env
echo -e "${green}region${reset}: $AWS_REGION"
echo "VITE_AWS_REGION=${AWS_REGION}" >> react.env
echo -e "${green}cognito user pool id ${reset}: ${COGNITO_USER_POOL}"
echo "VITE_COGNITO_USER_POOL=${COGNITO_USER_POOL}" >> react.env
echo -e "${green}cognito client id${reset}: ${COGNITO_CLIENT_ID}"
echo "VITE_COGNITO_CLIENT_ID=${COGNITO_CLIENT_ID}" >> react.env

echo -e "${green}CONTENTS OF REACT.ENV${reset}"
echo -e "${red}ENV VARIABLES CAN BE SENSITIVE - BE CAREFUL${reset}"
cat react.env

echo -e "${green} now copying this file to the frontend folder${reset}"
echo -n "" > ../.env
mv react.env ../front/.env
ls -la ../front