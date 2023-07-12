#! /bin/bash

export red="\033[1;31m"
export green="\033[1;32m"
export yellow="\033[1;33m"
export blue="\033[1;34m"
export purple="\033[1;35m"
export cyan="\033[1;36m"
export grey="\033[0;37m"
export reset="\033[m"

if [ -z "$AWS_REGION" ]; then
    echo " "
    echo -e "${red}AWS_REGION variable not set.${reset} This is used for Terraform."
    echo -e "${cyan}Type one region such as: us-east1${reset}, eu-west-2, ca-central-1"
    echo " " 
    echo -en "${green} What is your AWS Region? (format: us-east-1)${reset}: "
    read -r AWS_REGION
    export AWS_REGION
    
fi

if [ -z "$AWS_PROFILE" ]; then
    echo " "
    echo -e "${red}AWS_PROFILE variable not set${reset}.\nThis needs to be the name of the AWS credential's profile you set when you ran the AWS cli command: ${green}aws configure${reset}"
    echo -e "You can look in the ${red}hidden${reset} ".aws" folder in your linux user's home directory."
    echo -e "If you are on Linux and you already have run the setup command it should be in a directory like: ${cyan}/home/username/.aws/credentials${reset}"
    echo -e "The credentials file will have access keys sorted by name like: [profileName]"
    echo " "
    echo -en "${green}What is the name of the AWS Credentials profile you want to use?${reset} \n(${cyan}example1${reset}: [default], ${cyan}example2${reset}: [dev])${reset}: "
    read -r AWS_PROFILE
    export AWS_PROFILE
fi

echo $AWS_REGION
echo $AWS_PROFILE