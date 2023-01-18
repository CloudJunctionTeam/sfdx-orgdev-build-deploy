const core = require('@actions/core')
const execCommand = require('./exec-command.js');

var fnInstallSFDX = function(){
    core.info('=== Download and install SFDX cli ===');
    //execCommand.run('wget', ['https://developer.salesforce.com/media/salesforce-cli/sfdx-cli/channels/stable/sfdx-cli-v7.72.0-697e9faee2-linux-x64.tar.xz']);
    // execCommand.run('wget', ['https://developer.salesforce.com/media/salesforce-cli/sfdx/channels/stable/sfdx-linux-x64.tar.xz']);
    execCommand.run('wget', ['https://developer.salesforce.com/media/salesforce-cli/sfdx/versions/7.172.0/1aa6bdf/sfdx-v7.142.0-1aa6bdf-linux-x64.tar.xz']);
    execCommand.run('mkdir', ['-p', 'sfdx']);
    //execCommand.run('tar', ['xJf', 'sfdx-cli-v7.72.0-697e9faee2-linux-x64.tar.xz', '-C', 'sfdx-cli', '--strip-components', '1']);
    execCommand.run('tar', ['xJf', 'sfdx-linux-x64.tar.xz', '-C', 'sfdx', '--strip-components', '1']);
    // execCommand.run('export', ['PATH=./sfdx/bin:$PATH']);
    execCommand.run('./sfdx/bin/sfdx', ['version'])
    core.info('=== SFDX cli installed ===');
};

module.exports.install = function(command, args) {
    //Installs Salesforce DX CLI
    fnInstallSFDX(); 

};
