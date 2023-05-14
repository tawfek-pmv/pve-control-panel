export default {
	serverid: () => {return appsmith.user.username.replace(/\D/g,'')},
	servertype: () => {return "qemu"}, //qemu/lxc
	current_node: () => {
   var workingdata = heartbeat_.data.data.filter(obj => obj.vmid == obj_var.serverid())
	 return workingdata[0].node
		  //try{
      //if (heartbeat_['responseMeta']['isExecutionSuccess'] == true) {
			//return "proxmox"
			//} else if (heartbeat__['responseMeta']['isExecutionSuccess'] == true) {
			//return "proxmox3" 
			//}
			//}catch(error){}
			//}
	}
	}
