import { Typography, Box, Button, TextField } from "@mui/material";
import useLogin from "./hook";

function Login() {
	const { form, handleChange, handleSubmit } = useLogin();

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<Box
				component="img"
				src={"/static/images/login1.jpg"}
				alt="yo yo"
				sx={{
					height: 500,
					borderBottomRightRadius: 50,
				}}
			/>
			<Box
				component="form"
				onSubmit={handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					rowGap: 2,
					flexGrow: 1,
					px: 20,
				}}
			>
				<Typography variant="h2" mb={5}>
					Login
				</Typography>

				<TextField
					placeholder="Email"
					fullWidth
					name="email"
					required
					value={form.email}
					onChange={handleChange}
					type="email"
				/>
				<TextField
					placeholder="Password"
					fullWidth
					name="password"
					required
					value={form.password}
					onChange={handleChange}
					type="password"
				/>

				<Box
					sx={{
						mt: 5,
						display: "flex",
						flexDirection: "column",
						width: "100%",
						rowGap: 2,
					}}
				>
					<Button variant="contained" type="submit">
						Sign In
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Login;
