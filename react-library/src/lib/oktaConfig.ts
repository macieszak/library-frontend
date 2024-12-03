export const oktaConfig = {
	clientId: `0oalkvyhdz6yz8dIj5d7`,
	issuer: `https://dev-99780231.okta.com`,
	redirectUri: 'http://localhost:3000/login/callback',
	scopes: ['openid', 'profile', 'email'],
	pkce: true,
	disableHttpsCheck: true,
}
