import http from '@/http';

/**
 * 登陆
 */
export default {
	state: {
		
	},
	actions: {
		//登录
		login({ commit }, data) {
			return http({
				url: '/login',
				method: 'post',
				data: data
			}).then(res => {
				if (res.success) {
					return Promise.resolve(res);
				} else {
					return Promise.reject((res && res.message) || "获取数据失败");
				}
			}).catch(error => {
				return Promise.reject(error);
			})
		}
		
	},
	mutations: {

	},
	getters: {

	}
}
