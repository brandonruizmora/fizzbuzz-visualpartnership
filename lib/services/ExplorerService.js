class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const explorersUsernames = explorersByMission.map((explorer) => explorer.githubUsername);
        return explorersUsernames;
    }

    static filterByStack(explorers, stack) {
        let explorersWithStack = [];
        explorers.forEach(explorer => {
            if (explorer.stacks.find(stackExplorer => stackExplorer === stack)) {
                explorersWithStack.push(explorer);
            }
        });
        return explorersWithStack;
    }

}

module.exports = ExplorerService;
