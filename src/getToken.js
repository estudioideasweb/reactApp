const {JWT} = require('google-auth-library');
const keys = {
    "type": "service_account",
    "project_id": "coderreact-bsas",
    "private_key_id": "0bf44d21873e9ea6773f55ed7598c3bee91671b8",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCan/dAE4f4ylzW\nDDBXqA6tfWUU7XeKevCKRsL6hqmGD9W7LcASIz99HkUBJF9FCU5EDqV6VP/r54JI\nQ219VMdEOoBnvnoKYF2uwktybTwPw75+qX3oSL3+r0nMir3+SRJgYT2vPWbmIoDG\n0HePMA+7IeAo9wljrDbzvEmVVI2EpaHpptd2ASaukW2p4HIjaoTnUi6U0o9gaZON\nrK1JKH0o/8ML3vlKYoN+VDOChzGx2YYv7QBEdrO6IYcrGbbF9RlV2WkYRquiFONi\nrUPLwvnsK9IzJWkwe+W+mLPnGytnR8agtadOBTaHxrzQX+jiqFaZrR16NOWN+pJu\nWYGOzVrbAgMBAAECggEAJxDveSL2IaePGQ1vUVZGjxK1bToqD7TL/UOvk3hecF6j\n02zVsD9zlPsG2CkGYPze51cD/ApptoKBahyPFzFKPzTAqHV5hBGg2byBL2Hl4N3F\nzV6pTvzB9Az5ilIreomfuPYYjaPn0ZE6FAErk+PCtbbzWaZAmwwxvhb+SFpafv6t\naJjMadQjfQI3XqI7dM07s0m6MKQHOiSrFTp6jMdy/vCva0JmgCAGbpWBcEk4ztGa\nS8yw6hAZlkcBWsVQIADpE/n0s05qhlM+KUf0GfFi+JqqJqGGMFrYqnmUK/9VYe7n\nwZ9Ytg1F9NqUlZEQyplQ4rHIpf/6SbGogXQDMTQc8QKBgQDQ1V36OjBFCoPNTewm\nAU0sdm//v3HF8gYUg4kZVxZEURa2WUT3zQjOxuKwHFcM381m/p5WPQe32PB3PC7W\ntmPi0sB7UBZ+ROsWBd/UlQ3St5fUOxtrqWBuYB8dku0l1pT3whcLLumqeZTsmOF7\nCSfxdEPerdiXLbXwVvpuRR6CDQKBgQC9jEnGtokHt/C9YaZni3QyTnoEIAT7jW+B\ne+gGvPKnkVI9Rr/zSduZV27KtSbRy5v7nG92AdoaDaXT8uVjZTwpayXny2ruTaTs\nrZFk6xy59aCYrjvybcQ4fCfpyvUS33OMGgiqcpC1fQpN4UJH8eWj8qCi1UGdya5C\nH9X9aE5ehwKBgQCdNYKhtNxRnTDLhTWZBrHKHv8BUGWd1iytlLfI0753f3PRojJB\nOaC/yQkt+qetkW1Xc6ZO1XLR/AZKPIwmJvfa8Tzll8zXEZrH4XQ23F6jmoI5yqVB\nzyhA7yt9X/YW3gsW2I3wZUiShSSPWCemL6ZaJmRRZh3+8PJeE5xDFtV4oQKBgDZN\nNWmHK5SZfo9SpVBupBgxYUVDQwopx7MJozwi70VQHYZOeXkiRJYWdTf/U6KwuPwJ\nIelluGzUUhh5MnwaKXUYLCDOptCkT8Y6JzgJHw6rLpnu+F+IULl54BlbOoBwoXKW\nlrr13T0RGF2dVda0lvwz6w8bFxQ0DgcFhdF2C1WLAoGADQdmAb8BTwn/KOd05bXw\nXS3c7rg9dhBtNiW/BlNIWKZLrC0lh0Dqi/bIF/R3w9e3JjpjV+itM6q1X0w5ukrM\nlqrv0+SSIajCbBpK1osbrMQNjaw3/UvhP0bq5epQeZbwma5Ir8fNg+4xk8QYCkbf\nPlVBbmKCfnfSnWWa7yAfaZA=\n-----END PRIVATE KEY-----\n",
    "client_email": "coderreact-bsas@appspot.gserviceaccount.com",
    "client_id": "113482240870953098715",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/coderreact-bsas%40appspot.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  };//require('./jwt.keys.json');

async function main() {
  const client = new JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  });
  const url = `https://dns.googleapis.com/dns/v1/projects/${keys.project_id}`;
  const res = await client.request({url});
  console.log(res.data);
}

main().catch(console.error);