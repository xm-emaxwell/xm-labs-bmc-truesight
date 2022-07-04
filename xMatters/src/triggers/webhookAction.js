/*
Expected payload

{
    "appId" : "${appId}",
    "createdTime": "${createdTime}",
    "closedTime": "${closedTime}",
    "entityTypeId": "${entityTypeId}",
    "eventClass": "${eventClass}",
    "eventDesc": "${eventDesc}",
    "eventId": "${eventId}",
    "metric": "${metric}",
    "notes": "${notes}",
    "product": "${product}",
    "ruleDesc": "${ruleDesc}",
    "ruleId": "${ruleId}",
    "severity": "${severity}",
    "source" : "${source}",
    "state": "${state}",
    "status": "${status}",
    "tenantId": "${tenantId}",
    "title": "${title}"
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
output['App ID'] = payload.appId ? payload.appId : '';
output['Created Time'] = payload.createdTime ? payload.createdTime : '';
output['Closed Time'] = payload.closedTime ? payload.closedTime : '';
output['Entity Type ID'] = payload.entityTypeId ? payload.entityTypeId : '';
output['Event Class'] = payload.eventClass ? payload.eventClass : '';
output['Event Description'] = payload.eventDesc ? payload.eventDesc : '';
output['Event ID'] = payload.eventId ? payload.eventId : '';
output['Metric'] = payload.metric ? payload.metric : '';
output['Notes'] = payload.notes ? payload.notes : '';
output['Product'] = payload.product ? payload.product : '';
output['Rule Description'] = payload.ruleDesc ? payload.ruleDesc : '';
output['Rule ID'] = payload.ruleId ? payload.ruleId : '';
output['Severity'] = payload.severity ? payload.severity : '';
output['Source'] = payload.source ? payload.source : '';
output['State'] = payload.state ? payload.state : '';
output['Status'] = payload.status ? payload.status : '';
output['Tenant ID'] = payload.tenantId ? payload.tenantId : '';
output['Title'] = payload.title ? payload.title : '';
