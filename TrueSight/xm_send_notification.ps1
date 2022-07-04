$url = "<path to xM trigger URL>"

function checkEnvValue {

    param (
        $EnvValue
    )

    if ($EnvValue -ne $null){
        Write-Output $EnvValue
    }
    else {
        Write-Output ""
    }

}

$body = @{
    "id" = checkEnvValue -EnvValue $env:mc_ueid
    "severity" = checkEnvValue -EnvValue $env:severity
    "status" = checkEnvValue -EnvValue $env:status
    "priority" = checkEnvValue -EnvValue $env:mc_priority
    "reception_date" = checkEnvValue -EnvValue $env:date_reception
    "cell_name" = checkEnvValue -EnvValue $env:CELL_NAME
    "host_address" = checkEnvValue -EnvValue $env:mc_host_address
    "client_address" = checkEnvValue -EnvValue $env:mc_client_address
    "host" =  checkEnvValue -EnvValue $env:mc_host
    "object" =  checkEnvValue -EnvValue $env:mc_object
    "object_class" =  checkEnvValue -EnvValue $env:mc_object_class
    "parameters" =  checkEnvValue -EnvValue $env:mc_parameter
    "tool" =  checkEnvValue -EnvValue $env:mc_tool
    "tool_class" =  checkEnvValue -EnvValue $env:mc_tool_class
    "smc_causes" =  checkEnvValue -EnvValue $env:mc_smc_causes
    "smc_effects" =  checkEnvValue -EnvValue $env:mc_smc_effects
    "msg" =  checkEnvValue -EnvValue $env:msg
}

Invoke-RestMethod -Method 'Post' -Uri $url -Body ($body|ConvertTo-Json) -ContentType "application/json" 
