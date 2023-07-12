resource "random_id" "cognito" {
    byte_length = 3
}

resource "aws_cognito_user_pool_client" "client" {
  name = "client"

  user_pool_id = aws_cognito_user_pool.pool.id
}

resource "aws_cognito_user_pool" "pool" {
  name = "${var.cognito_user_pool_name}-${random_id.cognito.dec}"
  password_policy {
    minimum_length = var.pw_min_length
    require_symbols = false
    require_uppercase = false
  }
  schema {
    name = "name"
    attribute_data_type = "String"
    mutable = true
    required = false
  }
  username_attributes = ["email"]
  auto_verified_attributes = ["email"]

  lifecycle{
    create_before_destroy = true

    ignore_changes = [
      password_policy,
      schema
    ]
  }

#   lambda_config {
#     post_confirmation = var.confirmSignup_arn
#   }
  
}