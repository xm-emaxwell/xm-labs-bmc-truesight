/*
Expected payload

{
    "recipients": "",
    "id": "%mc_ueid%",
    "severity": "%severity%",
    "status": "%status%",
    "priority": "%mc_priority%",
    "reception_date": "%date_reception%",
    "cell_name": "%CELL_NAME%",
    "host_address": "%mc_host_address%",
    "client_address": "%mc_client_address%",
    "host": "%mc_host%",
    "object": "%mc_object%",
    "object_class": "%mc_object_class%",
    "parameters": "%mc_parameter%",
    "tool": "%mc_tool%",
    "tool_class": "%mc_tool_class%",
    "smc_causes": "%mc_smc_causes%",
    "smc_effects": "%mc_smc_effects%",
    "msg": "%msg%"
}
*/

var recipients = '';
if (request.parameters && request.parameters.recipients) {
  recipients = request.parameters.recipients;
}

var payload = JSON.parse(request.body);

if(payload.recipients){
    recipients = payload.recipients;
}

output['Recipients'] = recipients;
output['ID'] = payload.id ? payload.id : '';
output['Severity'] = payload.severity ? payload.severity : '';
output['Status'] = payload.status ? payload.status : '';
output['Priority'] = payload.priority ? payload.priority : '';
output['Reception Date'] = payload.reception_date ? payload.reception_date : '';
output['Cell Name'] = payload.cell_name ? payload.cell_name : '';
output['Host Address'] = payload.host_address ? payload.host_address : '';
output['Client Address'] = payload.client_address ? payload.client_address : '';
output['Host'] = payload.host ? payload.host : '';
output['Object'] = payload.object ? payload.object : '';
output['Object Class'] = payload.object_class ? payload.object_class : '';
output['Parameters'] = payload.parameters ? payload.parameters : '';
output['Tool'] = payload.tool ? payload.tool : '';
output['Tool Class'] = payload.tool_class ? payload.tool_class : '';
output['SMC Causes'] = payload.smc_causes ? payload.smc_causes : '';
output['SMC Effects'] = payload.smc_effects ? payload.smc_effects : '';
output['Message'] = payload.msg ? payload.msg : '';
