export default {
	current: () => {
		if (cloudflare_.data.result["0"]["content"] == "s51.ip.tawfek.dk") {return "87.104.45.132"}
		else if (cloudflare_.data.result["0"]["content"] == "u7a.ip.tawfek.dk") {return "80.210.78.252"}
	  else {return "0.0.0.0"}},
	hide: async () => {
		run.run()
		showModal('Modal2')
	},
	currentv6: () => {
		if (cloudflare_.data.result["0"]["content"] == "s51.ip.tawfek.dk") {return "87.104.45.132"}
		else if (cloudflare_.data.result["0"]["content"] == "u7a.ip.tawfek.dk") {return "87.104.45.132"}
	  else {return "0.0.0.0"}},
	test: () => {
   return }
}