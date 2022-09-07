window.addEventListener("load", ()=>{
	const pull_source_code_element = document.getElementById("ClickPullSourceCode");
	const restart_server_element = document.getElementById("ClickRestartServer");
	const build_server_element = document.getElementById("ClickBuildServer");
	const build_client_element = document.getElementById("ClickBuildClient");

	let flag_pull = false;
	let flag_restart = false;
	let flag_build_server = false;
	let flag_build_client = false;

	pull_source_code_element.addEventListener("click", ()=>{
		if(flag_pull) window.alert("이미 소스코드 Pullinmg이 진행 중입니다.")
		flag_pull = true;
		axios.post("/api/pull-source-code", {});
	});
	
	restart_server_element.addEventListener("click", ()=>{
		if(flag_restart) window.alert("이미 서버가 재시작 중입니다.")
		flag_restart = true;
		axios.post("/api/restart-server", {});
	});

	build_server_element.addEventListener("click", ()=>{
		if(flag_build_server) window.alert("이미 서버 빌드가 진행 중입니다.")
		flag_build_server = true;
		axios.post("/api/build-server", {});
	});

	build_client_element.addEventListener("click", ()=>{
		if(flag_build_client) window.alert("이미 클라이언트 빌드가 진행 중입니다.")
		flag_build_client = true;
		axios.post("/api/build-client", {});
	});
});

