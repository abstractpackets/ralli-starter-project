output "cognito_client_id"{
    value = module.auth.cognito_client_id
}
output "cognito_user_pool_id"{
        value = module.auth.cognito_user_pool_id
}
output "aws_region" {
    value = data.aws_region.current.name
}