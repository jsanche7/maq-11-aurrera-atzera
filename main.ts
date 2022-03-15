basic.forever(function () {
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 35)
    basic.pause(3000)
    DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 35)
    basic.pause(3000)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
