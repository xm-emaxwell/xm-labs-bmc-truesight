$url = "<path to xM trigger URL>"

function checkForNull {

    param (
        $value
    )

    if ($value){
        Write-Output $value
    }
    else {
        Write-Output ""
    }
}


$body = @{
    "user" = checkForNull -value $args[0]
    "id" = checkForNull -value $env:mc_ueid
    "severity" = checkForNull -value $env:severity
    "status" = checkForNull -value $env:status
    "priority" = checkForNull -value $env:mc_priority
    "reception_date" = checkForNull -value $env:date_reception
    "cell_name" = checkForNull -value $env:CELL_NAME
    "host_address" = checkForNull -value $env:mc_host_address
    "client_address" = checkForNull -value $env:mc_client_address
    "host" =  checkForNull -value $env:mc_host
    "object" =  checkForNull -value $env:mc_object
    "object_class" =  checkForNull -value $env:mc_object_class
    "parameters" =  checkForNull -value $env:mc_parameter
    "tool" =  checkForNull -value $env:mc_tool
    "tool_class" =  checkForNull -value $env:mc_tool_class
    "smc_causes" =  checkForNull -value $env:mc_smc_causes
    "smc_effects" =  checkForNull -value $env:mc_smc_effects
    "msg" =  checkForNull -value $env:msg
}

Invoke-RestMethod -Method 'Post' -Uri $url -Body ($body|ConvertTo-Json) -ContentType "application/json"  
