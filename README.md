# xm-labs-bmc-truesight

This is an update to the earlier [xm-labs-bmc-bppm-truesight integration](https://github.com/xmatters/xm-labs-bmc-bppm-truesight)


<kbd>
<a href="https://support.xmatters.com/hc/en-us/community/topics">
   <img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</a>
</kbd>


# Files
* [xm_send_notification.ps1](TrueSight/command_files/xm_send_notification.ps1) - updated command file for sending signals to xMatters
* [xm_delete_notification.ps1](TrueSight/command_files/xm_delete_notification.ps1) - updated command file for sending incident resolved signal to xMatters
* [BMCTrueSight.zip](xMatters/workflow/BMCTrueSight.zip) - contains updated trigger and example workflow

# Installation
Follow the instructions for the [earlier integration](https://github.com/xmatters/xm-labs-bmc-bppm-truesight) with the following changes:
* Use the xMatters Agent
* Start with the [example workflow](xMatters/workflow/BMCTrueSight.zip) in this repo
* Use the [command files](TrueSight/command_files) in this repo and configure them to send to the trigger URL in the this workflow.
