const Login = () =>
	import ("@/views/login/login");
const loginRouter = [{
	path: '/login',
	name: 'login',
	component: Login
}]

export default loginRouter;
