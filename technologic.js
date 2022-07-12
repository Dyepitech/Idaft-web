window.addEventListener('DOMContentLoaded', () => {
    const helmets = document.querySelector('.helmets')

    const ogg_buyIt = document.querySelector('.ogg_buyIt')
    const ogg_useIt = document.querySelector('.ogg_useIt')
    const ogg_breakIt = document.querySelector('.ogg_breakIt')
    const ogg_fixIt = document.querySelector('.ogg_fixIt')
    const ogg_trashIt = document.querySelector('.ogg_trashIt')
    const ogg_mail = document.querySelector('.ogg_mail')
    const ogg_changeIt = document.querySelector('.ogg_changeIt')
    const ogg_upgradeIt = document.querySelector('.ogg_upgradeIt')
    const ogg_chargeIt = document.querySelector('.ogg_chargeIt')
    const ogg_pointIt = document.querySelector('.ogg_pointIt')
    const ogg_zoomIt = document.querySelector('.ogg_zoomIt')
    const ogg_pressIt = document.querySelector('.ogg_pressIt')
    const ogg_snapIt = document.querySelector('.ogg_snapIt')
    const ogg_workIt = document.querySelector('.ogg_workIt')
    const ogg_eraseIt = document.querySelector('.ogg_eraseIt')
    const ogg_writeIt = document.querySelector('.ogg_writeIt')
    const ogg_cutIt = document.querySelector('.ogg_cutIt')
    const ogg_parseIt = document.querySelector('.ogg_parseIt')
    const ogg_saveIt = document.querySelector('.ogg_saveIt')
    const ogg_loadIt = document.querySelector('.ogg_loadIt')
    const ogg_checkIt = document.querySelector('.ogg_checkIt')
    const ogg_quick = document.querySelector('.ogg_quick')
    const ogg_quick1 = document.querySelector('.ogg_quick1')
    const ogg_rewriteIt = document.querySelector('.ogg_rewriteIt')
    const ogg_plugIt = document.querySelector('.ogg_plugIt')
    const ogg_playIt = document.querySelector('.ogg_playIt')
    const ogg_burnIt = document.querySelector('.ogg_burnIt')
    const ogg_ripIt = document.querySelector('.ogg_ripIt')
    const ogg_lockIt = document.querySelector('.ogg_lockIt')
    const ogg_fillIt = document.querySelector('.ogg_fillIt')
    const ogg_callIt = document.querySelector('.ogg_callIt')
    const ogg_findIt = document.querySelector('.ogg_findIt')
    const ogg_viewIt = document.querySelector('.ogg_viewIt')
    const ogg_codeIt = document.querySelector('.ogg_codeIt')
    const ogg_jam = document.querySelector('.ogg_jam')
    const ogg_unlockIt = document.querySelector('.ogg_unlockIt')
    const ogg_surfIt = document.querySelector('.ogg_surfIt')
    const ogg_scrollIt = document.querySelector('.ogg_scrollIt')
    const ogg_pauseIt = document.querySelector('.ogg_pauseIt')
    const ogg_clickIt = document.querySelector('.ogg_clickIt')
    const ogg_crossIt = document.querySelector('.ogg_crossIt')
    const ogg_crackIt = document.querySelector('.ogg_crackIt')
    const ogg_switch = document.querySelector('.ogg_switch')
    const ogg_updateIt = document.querySelector('.ogg_updateIt')
    const ogg_nameIt = document.querySelector('.ogg_nameIt')
    const ogg_rateIt = document.querySelector('.ogg_rateIt')
    const ogg_tuneIt = document.querySelector('.ogg_tuneIt')
    const ogg_printIt = document.querySelector('.ogg_printIt')
    const ogg_scanIt = document.querySelector('.ogg_scanIt')
    const ogg_sendIt = document.querySelector('.ogg_sendIt')
    const ogg_fax = document.querySelector('.ogg_fax')
    const ogg_renameIt = document.querySelector('.ogg_renameIt')
    const ogg_touchIt = document.querySelector('.ogg_touchIt')
    const ogg_pasteIt = document.querySelector('.ogg_pasteIt')
    const ogg_zipIt = document.querySelector('.ogg_zipIt')
    const ogg_unzipIt = document.querySelector('.ogg_unzipIt')
    const ogg_drag = document.querySelector('.ogg_drag')
    const ogg_drop = document.querySelector('.ogg_drop')
    const ogg_bringIt = document.querySelector('.ogg_bringIt')
    const ogg_payIt = document.querySelector('.ogg_payIt')
    const ogg_watchIt= document.querySelector('.ogg_watchIt')
    const ogg_turnIt = document.querySelector('.ogg_turnIt')
    const ogg_leaveIt= document.querySelector('.ogg_leaveIt')
    const ogg_start = document.querySelector('.ogg_start')
    const ogg_formatIt = document.querySelector('.ogg_formatIt')
    const ogg_technologic = document.querySelector('.ogg_technologic')
    const ogg_instru = document.querySelector('.ogg_instru')


    const buttons = document.querySelectorAll('.button')

    const buttonBuyit = document.querySelector('.buyit')
    const buttonUseit = document.querySelector('.useit')
    const buttonBreakit = document.querySelector('.breakit')
    const buttonFixit = document.querySelector('.fixit')
    const buttonTrashit = document.querySelector('.trashit')
    const buttonChangeit = document.querySelector('.changeit')
    const buttonMail = document.querySelector('.mail')
    const buttonUpgradeit = document.querySelector('.upgradeit')
    const buttonChargeit = document.querySelector('.chargeit')
    const buttonPointit = document.querySelector('.pointit')
    const buttonZoomit = document.querySelector('.zoomit')
    const buttonPressit = document.querySelector('.pressit')
    const buttonSnapit = document.querySelector('.snapit')
    const buttonWorkit = document.querySelector('.workit')
    const buttonEraseit = document.querySelector('.eraseit')
    const buttonWriteit = document.querySelector('.writeit')
    const buttonCutit = document.querySelector('.cutit')
    const buttonPasteit = document.querySelector('.pasteit')
    const buttonSaveit = document.querySelector('.saveit')
    const buttonLoadit = document.querySelector('.loadit')
    const buttonCheckit = document.querySelector('.checkit')
    const buttonQuick = document.querySelector('.quick')
    const buttonQuick1 = document.querySelector('.quick1')
    const buttonRewriteit = document.querySelector('.rewriteit')
    const buttonPlugit = document.querySelector('.plugit')
    const buttonPlayit = document.querySelector('.playit')
    const buttonBurnit = document.querySelector('.burnit')
    const buttonRipit = document.querySelector('.ripit')
    const buttonLockit = document.querySelector('.lockit')
    const buttonFillit = document.querySelector('.fillit')
    const buttonCallit = document.querySelector('.callit')
    const buttonFindit = document.querySelector('.findit')
    const buttonViewit = document.querySelector('.viewit')
    const buttonCodeit = document.querySelector('.codeit')
    const buttonUnzipit = document.querySelector('.unzipit')
    const buttonZipit = document.querySelector('.zipit')
    const buttonJam = document.querySelector('.jam')
    const buttonUnlockit = document.querySelector('.unlockit')
    const buttonSurfit = document.querySelector('.surfit')
    const buttonScrollit = document.querySelector('.scrollit')
    const buttonPauseit = document.querySelector('.pauseit')
    const buttonClickit = document.querySelector('.clickit')
    const buttonCrossit = document.querySelector('.crossit')
    const buttonCrackit = document.querySelector('.crackit')
    const buttonSwitch = document.querySelector('.switch')
    const buttonNameit = document.querySelector('.nameit')
    const buttonRateit = document.querySelector('.rateit')
    const buttonTuneit = document.querySelector('.tuneit')
    const buttonPrintit = document.querySelector('.printit')
    const buttonScanit = document.querySelector('.scanit')
    const buttonSendit = document.querySelector('.sendit')
    const buttonFax = document.querySelector('.fax')
    const buttonRenameit = document.querySelector('.renameit')
    const buttonTouchit = document.querySelector('.touchit')
    const buttonUpdateit = document.querySelector('.updateit')
    const buttonDrag = document.querySelector('.drag')
    const buttonDrop = document.querySelector('.drop')
    const buttonBringit = document.querySelector('.bringit')
    const buttonPayit = document.querySelector('.payit')
    const buttonWatchit = document.querySelector('.watchit')
    const buttonTurnit = document.querySelector('.turnit')
    const buttonLeaveit = document.querySelector('.leaveit')
    const buttonStart = document.querySelector('.start')
    const buttonFormatit = document.querySelector('.formatit')
    const buttonInstru = document.querySelector('.instru')
    const buttonTechnologic = document.querySelector('.technologic')

    helmets.addEventListener('mousedown', (e) => {
        console.log('reset')
        location.reload()
    })


    let speed = 1

    const slider = document.querySelector('.slider')


    slider.addEventListener('change', (e) => {
        speed = ((e.target.value) / 50)
        alert('Vitesse: ' + speed)

    })

    buttons.forEach(name => {
        name.addEventListener('mouseout', (event) => {
            event.target.classList.remove('clicked')
        })
        name.addEventListener('mouseup', (event) => {
            event.target.classList.remove('clicked')
        })
        name.addEventListener('mousedown', (event) => {
            event.target.classList.add('clicked')
        })

    })


    buttonBuyit.addEventListener('mousedown', () => {
        ogg_buyIt.currentTime = 0
        ogg_buyIt.playbackRate = speed
        ogg_buyIt.play()
    })


    buttonUseit.addEventListener('mousedown', () => {
        ogg_useIt.currentTime = 0
        ogg_useIt.playbackRate = speed
        ogg_useIt.play()
    })

    buttonBreakit.addEventListener('mousedown', () => {
        ogg_breakIt.currentTime = 0
        ogg_breakIt.playbackRate = speed
        ogg_breakIt.play()
    })

    buttonFixit.addEventListener('mousedown', () => {
        ogg_fixIt.currentTime = 0
        ogg_fixIt.playbackRate = speed
        ogg_fixIt.play()
    })

    buttonTrashit.addEventListener('mousedown', () => {
        ogg_trashIt.currentTime = 0
        ogg_trashIt.playbackRate = speed
        ogg_trashIt.play()
    })

    buttonChangeit.addEventListener('mousedown', () => {
        ogg_changeIt.currentTime = 0
        ogg_changeIt.playbackRate = speed
        ogg_changeIt.play()
    })

    buttonMail.addEventListener('mousedown', () => {
        ogg_mail.currentTime = 0
        ogg_mail.playbackRate = speed
        ogg_mail.play()
    })

    buttonChargeit.addEventListener('mousedown', () => {
        ogg_chargeIt.currentTime = 0
        ogg_chargeIt.playbackRate = speed
        ogg_chargeIt.play()
    })

    buttonPointit.addEventListener('mousedown', () => {
        ogg_pointIt.currentTime = 0
        ogg_pointIt.playbackRate = speed
        ogg_pointIt.play()
    })

    buttonZoomit.addEventListener('mousedown', () => {
        ogg_zoomIt.currentTime = 0
        ogg_zoomIt.playbackRate = speed
        ogg_zoomIt.play()
    })

    buttonPressit.addEventListener('mousedown', () => {
        ogg_pressIt.currentTime = 0
        ogg_pressIt.playbackRate = speed
        ogg_pressIt.play()
    })

    buttonSnapit.addEventListener('mousedown', () => {
        ogg_snapIt.currentTime = 0
        ogg_snapIt.playbackRate = speed
        ogg_snapIt.play()
    })

    buttonWorkit.addEventListener('mousedown', () => {
        ogg_workIt.currentTime = 0
        ogg_workIt.playbackRate = speed
        ogg_workIt.play()
    })

    buttonEraseit.addEventListener('mousedown', () => {
        ogg_eraseIt.currentTime = 0
        ogg_eraseIt.playbackRate = speed
        ogg_eraseIt.play()
    })

    buttonWriteit.addEventListener('mousedown', () => {
        ogg_writeIt.currentTime = 0
        ogg_writeIt.playbackRate = speed
        ogg_writeIt.play()
    })

    buttonCutit.addEventListener('mousedown', () => {
        ogg_cutIt.currentTime = 0
        ogg_cutIt.playbackRate = speed
        ogg_cutIt.play()
    })

    buttonPasteit.addEventListener('mousedown', () => {
        ogg_pasteIt.currentTime = 0
        ogg_pasteIt.playbackRate = speed
        ogg_pasteIt.play()
    })

    buttonSaveit.addEventListener('mousedown', () => {
        ogg_saveIt.currentTime = 0
        ogg_saveIt.playbackRate = speed
        ogg_saveIt.play()
    })

    buttonLoadit.addEventListener('mousedown', () => {
        ogg_loadIt.currentTime = 0
        ogg_loadIt.playbackRate = speed
        ogg_loadIt.play()
    })

    buttonCheckit.addEventListener('mousedown', () => {
        ogg_checkIt.currentTime = 0
        ogg_checkIt.playbackRate = speed
        ogg_checkIt.play()
    })

    buttonQuick.addEventListener('mousedown', () => {
        ogg_quick.currentTime = 0
        ogg_quick.playbackRate = speed
        ogg_quick.play()
    })

    buttonQuick1.addEventListener('mousedown', () => {
        ogg_quick1.currentTime = 0
        ogg_quick1.playbackRate = speed
        ogg_quick1.play()
    })

    buttonRewriteit.addEventListener('mousedown', () => {
        ogg_rewriteIt.currentTime = 0
        ogg_rewriteIt.playbackRate = speed
        ogg_rewriteIt.play()
    })

    buttonPlugit.addEventListener('mousedown', () => {
        ogg_plugIt.currentTime = 0
        ogg_plugIt.playbackRate = speed
        ogg_plugIt.play()
    })

    buttonPlayit.addEventListener('mousedown', () => {
        ogg_playIt.currentTime = 0
        ogg_playIt.playbackRate = speed
        ogg_playIt.play()
    })

    buttonBurnit.addEventListener('mousedown', () => {
        ogg_burnIt.currentTime = 0
        ogg_burnIt.playbackRate = speed
        ogg_burnIt.play()
    })

    buttonRipit.addEventListener('mousedown', () => {
        ogg_ripIt.currentTime = 0
        ogg_ripIt.playbackRate = speed
        ogg_ripIt.play()
    })

    buttonDrag.addEventListener('mousedown', () => {
        ogg_drag.currentTime = 0
        ogg_drag.playbackRate = speed
        ogg_drag.play()
    })

    buttonDrop.addEventListener('mousedown', () => {
        ogg_drop.currentTime = 0
        ogg_drop.playbackRate = speed
        ogg_drop.play()
    })

    buttonZipit.addEventListener('mousedown', () => {
        ogg_zipIt.currentTime = 0
        ogg_zipIt.playbackRate = speed
        ogg_zipIt.play()
    })

    buttonUnzipit.addEventListener('mousedown', () => {
        ogg_unzipIt.currentTime = 0
        ogg_unzipIt.playbackRate = speed
        ogg_unzipIt.play()
    })

    buttonLockit.addEventListener('mousedown', () => {
        ogg_lockIt.currentTime = 0
        ogg_lockIt.playbackRate = speed
        ogg_lockIt.play()
    })

    buttonFillit.addEventListener('mousedown', () => {
        ogg_fillIt.currentTime = 0
        ogg_fillIt.playbackRate = speed
        ogg_fillIt.play()
    })

    buttonCallit.addEventListener('mousedown', () => {
        ogg_callIt.currentTime = 0
        ogg_callIt.playbackRate = speed
        ogg_callIt.play()
    })

    buttonFindit.addEventListener('mousedown', () => {
        ogg_findIt.currentTime = 0
        ogg_findIt.playbackRate = speed
        ogg_findIt.play()
    })

    buttonViewit.addEventListener('mousedown', () => {
        ogg_viewIt.currentTime = 0
        ogg_viewIt.playbackRate = speed
        ogg_viewIt.play()
    })

    buttonCodeit.addEventListener('mousedown', () => {
        ogg_codeIt.currentTime = 0
        ogg_codeIt.playbackRate = speed
        ogg_codeIt.play()
    })

    buttonJam.addEventListener('mousedown', () => {
        ogg_jam.currentTime = 0
        ogg_jam.playbackRate = speed
        ogg_jam.play()
    })

    buttonUnlockit.addEventListener('mousedown', () => {
        ogg_unlockIt.currentTime = 0
        ogg_unlockIt.playbackRate = speed
        ogg_unlockIt.play()
    })

    buttonSurfit.addEventListener('mousedown', () => {
        ogg_surfIt.currentTime = 0
        ogg_surfIt.playbackRate = speed
        ogg_surfIt.play()
    })

    buttonScrollit.addEventListener('mousedown', () => {
        ogg_scrollIt.currentTime = 0
        ogg_scrollIt.playbackRate = speed
        ogg_scrollIt.play()
    })

    buttonPauseit.addEventListener('mousedown', () => {
        ogg_pauseIt.currentTime = 0
        ogg_pauseIt.playbackRate = speed
        ogg_pauseIt.play()
    })

    buttonPauseit.addEventListener('mousedown', () => {
        ogg_pauseIt.currentTime = 0
        ogg_pauseIt.playbackRate = speed
        ogg_pauseIt.play()
    })

    buttonClickit.addEventListener('mousedown', () => {
        ogg_clickIt.currentTime = 0
        ogg_clickIt.playbackRate = speed
        ogg_clickIt.play()
    })

    buttonCrossit.addEventListener('mousedown', () => {
        ogg_crossIt.currentTime = 0
        ogg_crossIt.playbackRate = speed
        ogg_crossIt.play()
    })

    buttonCrackit.addEventListener('mousedown', () => {
        ogg_crackIt.currentTime = 0
        ogg_crackIt.playbackRate = speed
        ogg_crackIt.play()
    })

    buttonUpgradeit.addEventListener('mousedown', () => {
        ogg_upgradeIt.currentTime = 0
        ogg_upgradeIt.playbackRate = speed
        ogg_upgradeIt.play()
    })

    buttonSwitch.addEventListener('mousedown', () => {
        ogg_switch.currentTime = 0
        ogg_switch.playbackRate = speed
        ogg_switch.play()
    })

    buttonNameit.addEventListener('mousedown', () => {
        ogg_nameIt.currentTime = 0
        ogg_nameIt.playbackRate = speed
        ogg_nameIt.play()
    })

    buttonRateit.addEventListener('mousedown', () => {
        ogg_rateIt.currentTime = 0
        ogg_rateIt.playbackRate = speed
        ogg_rateIt.play()
    })

    buttonTuneit.addEventListener('mousedown', () => {
        ogg_tuneIt.currentTime = 0
        ogg_tuneIt.playbackRate = speed
        ogg_tuneIt.play()
    })

    buttonPrintit.addEventListener('mousedown', () => {
        ogg_printIt.currentTime = 0
        ogg_printIt.playbackRate = speed
        ogg_printIt.play()
    })

    buttonScanit.addEventListener('mousedown', () => {
        ogg_scanIt.currentTime = 0
        ogg_scanIt.playbackRate = speed
        ogg_scanIt.play()
    })


    buttonSendit.addEventListener('mousedown', () => {
        ogg_sendIt.currentTime = 0
        ogg_sendIt.playbackRate = speed
        ogg_sendIt.play()
    })

    buttonFax.addEventListener('mousedown', () => {
        ogg_fax.currentTime = 0
        ogg_fax.playbackRate = speed
        ogg_fax.play()
    })

    buttonRenameit.addEventListener('mousedown', () => {
        ogg_renameIt.currentTime = 0
        ogg_renameIt.playbackRate = speed
        ogg_renameIt.play()
    })

    buttonTouchit.addEventListener('mousedown', () => {
        ogg_touchIt.currentTime = 0
        ogg_touchIt.playbackRate = speed
        ogg_touchIt.play()
    })

    buttonUpdateit.addEventListener('mousedown', () => {
        ogg_updateIt.currentTime = 0
        ogg_updateIt.playbackRate = speed
        ogg_updateIt.play()
    })

    buttonBringit.addEventListener('mousedown', () => {
        ogg_bringIt.currentTime = 0
        ogg_bringIt.playbackRate = speed
        ogg_bringIt.play()
    })

    buttonPayit.addEventListener('mousedown', () => {
        ogg_payIt.currentTime = 0
        ogg_payIt.playbackRate = speed
        ogg_payIt.play()
    })

    buttonWatchit.addEventListener('mousedown', () => {
        ogg_watchIt.currentTime = 0
        ogg_watchIt.playbackRate = speed
        ogg_watchIt.play()
    })

    buttonTurnit.addEventListener('mousedown', () => {
        ogg_turnIt.currentTime = 0
        ogg_turnIt.playbackRate = speed
        ogg_turnIt.play()
    })

    buttonLeaveit.addEventListener('mousedown', () => {
        ogg_leaveIt.currentTime = 0
        ogg_leaveIt.playbackRate = speed
        ogg_leaveIt.play()
    })

    buttonStart.addEventListener('mousedown', () => {
        ogg_start.currentTime = 0
        ogg_start.playbackRate = speed
        ogg_start.play()
    })

    buttonFormatit.addEventListener('mousedown', () => {
        ogg_formatIt.currentTime = 0
        ogg_formatIt.playbackRate = speed
        ogg_formatIt.play()
    })

    buttonInstru.addEventListener('mousedown', () => {
        ogg_instru.currentTime = 0
        ogg_instru.playbackRate = speed
        ogg_instru.play()
    })

    buttonTechnologic.addEventListener('mousedown', () => {
        ogg_technologic.currentTime = 0
        ogg_technologic.playbackRate = speed
        ogg_technologic.play()
    })
})
