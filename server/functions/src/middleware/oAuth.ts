import axios from "axios";

const tokenEndpoint = "https://dev-ltkz6dt5hkbper2c.us.auth0.com/oauth/token";

const oAuth = (req: any, res: any, next: () => void) => {
	const code = req.query.code;

	if (!code) {
		res.status(401).send("Missing authorization code");
	}

	const params = new URLSearchParams();
	params.append("grant_type", "authorization_code"); 
	params.append("client_id", process.env.AUTH0_CLIENTID || "");
	params.append("client_secret", process.env.AUTH0_SECRET || "")
	params.append("code", code);
	params.append("redirect_uri", "http://localhost:3000/games");

	axios.post(tokenEndpoint, params)
		.then((response) => {
			req.oauth = response.data;
			next();
		})
		.catch((err) => {
			console.log(err);
			res.status(403).json(`Reason: ${err.message}`)
		})
}

export default oAuth