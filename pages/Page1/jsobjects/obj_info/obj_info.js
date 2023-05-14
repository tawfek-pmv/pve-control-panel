export default {
	status: () => {
		if (status_.data.data.status == "running"){
			return "Tændt/online"
		}else{return "Stoppet/offline"}
		},
	serverid: () => {
		return status_.data.data.name
		},
	uptime: () => {
	function secondsToString(seconds)
		{
		var numdays = Math.floor((seconds % 31536000) / 86400); 
		var numhours = Math.floor(((seconds % 31536000) % 86400) / 3600);
		var numminutes = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
		var numseconds = (((seconds % 31536000) % 86400) % 3600) % 60;
		return numdays + " dag(e) " + numhours + " time(r) " + numminutes + " minut(ter) " + numseconds + " sekund(er)";
		}
		return secondsToString(status_.data.data.uptime)
	},
	maxram: () => {
    function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
   }
	 return formatBytes(status_.data.data.maxmem)
},
	maxssd: () => {
    function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
   }
	 return formatBytes(status_.data.data.maxdisk)
},
	usedram: () => {
		var res = status_.data.data.mem / status_.data.data.maxmem * 100
		return Math.round(res * 100) / 100
		},
	usedcpu: () => {
		var res = status_.data.data.cpu / status_.data.data.cpus * status_.data.data.cpus * 100
		return Math.round(res * 100) / 100
	},
		usedssd: () => {
		var res = status_.data.data.disk / status_.data.data.maxdisk * 100
		return Math.round(res * 100) / 100
	},
	  datacenter: () => {
		if (obj_var.current_node() == "proxmox") {return "dk-sorø-1"} else{return "dk-roskilde-1"}
	}
}

