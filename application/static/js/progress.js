function updateProgressBar(progressBar, value) {
    const progressFill = progressBar.querySelector('.progress-fill');
    const progressText = progressBar.querySelector('.progress-text');

    const stages = progressText.dataset.stages
        .split(',')
        .map(stage => stage.split(':'))
        .reverse();
    
    const activeStage = stages.find(stage => {
        return value >= stage[0];
    });

    progressFill.style.width = `${value}%`;
    progressText.textContent = `${activeStage[1]}`;
}