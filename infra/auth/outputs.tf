output "cognito_user_pool_id" {
    value = aws_cognito_user_pool.pool.id
}

output "cognito_client_id" {
    value = aws_cognito_user_pool_client.client.id
}