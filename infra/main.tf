data "aws_region" "current" {}
module "auth" {
    source = "./auth"
    cognito_user_pool_name = "another-project"
    pw_min_length = 8
}