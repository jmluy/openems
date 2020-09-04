export const TRANSLATION = {
    General: {
        active: 'aktivně',
        actualPower: 'E-Car Nabíjecí výkon',
        apply: 'Aplikovat',
        autarchy: 'Soběstačnost',
        automatic: 'Automaticky',
        cancel: 'zrušení',
        capacity: 'Kapacita',
        changeAccepted: 'Změna byla přijata',
        changeFailed: 'Změna se nezdařila',
        chargeDischarge: 'Debetní/vybíjení',
        chargePower: 'Nabíjecí výkon',
        componentInactive: 'Komponenta je neaktivní!',
        connectionLost: 'Spojení ztraceno. Pokouší se znovu připojit.',
        consumption: 'Spotřeba',
        cumulative: 'Kumulativní Hodnoty',
        currentName: 'Aktuální Jméno',
        currentValue: 'Aktuální hodnota',
        dateFormat: 'dd.MM.yyyy', // e.g. German: dd.MM.yyyy, English: yyyy-MM-dd (dd = Day, MM = Month, yyyy = Year)
        dischargePower: 'Vybíjecí výkon',
        fault: 'Chyba',
        grid: 'Síť',
        gridBuy: 'Nákup ze sítě',
        gridBuyAdvanced: 'Nákup',
        gridSell: 'Prodej do sítě',
        gridSellAdvanced: 'Prodej',
        history: 'Historie',
        inactive: 'Neaktivní',
        info: 'Informace',
        inputNotValid: 'Vstup je neplatný',
        live: 'Live',
        load: 'nálož',
        manually: 'Ruční',
        measuredValue: 'Měřená Hodnota',
        mode: 'Režim',
        more: 'Další',
        noValue: 'Žádná hodnota',
        off: 'Pryč',
        offGrid: 'žádné připojení k síti!',
        ok: 'ok',
        on: 'zapnutý',
        otherConsumption: 'jiná spotřeba',
        percentage: 'Procentuální vyjádření',
        periodFromTo: 'od {{value1}} do {{value2}}', // value1 = beginning date, value2 = end date
        phase: 'Fáze',
        phases: 'Fáze',
        power: 'Výkon',
        production: 'Výroba',
        rename: 'Přejmenovat',
        reportValue: 'Nahlásit nesprávná data',
        reset: 'Reset',
        selfConsumption: 'Vlastní spotřeba',
        soc: 'Stav nabití',
        state: 'Stát',
        storageSystem: 'Systém bateriového úložiště',
        systemState: 'Stav systému',
        total: 'celková spotřeba',
        totalState: 'Celkový stav',
        warning: 'Varování',
        Week: {
            monday: 'Pondělí',
            tuesday: 'Úterý',
            wednesday: 'Středa',
            thursday: 'Čtvrte',
            friday: 'Pátek',
            saturday: 'Sobota',
            sunday: 'Neděle'
        },
        Month: {
            january: 'Leden',
            february: 'Únor',
            march: 'Březen',
            april: 'Duben',
            may: 'Květen',
            june: 'Cerven',
            july: 'Cervenec',
            august: 'Srpen',
            september: 'Září',
            october: 'Ríjen',
            november: 'Listopad',
            december: 'Prosinec',
        },
    },
    Menu: {
        aboutUI: 'About OpenEMS UI',
        edgeSettings: 'hy-control Předvolby',
        generalSettings: 'Obecné Nastavení',
        index: 'Přehled',
        logout: 'Odhlásit',
        menu: 'Menu',
        overview: 'hy-control Přehled',
    },
    Index: {
        allConnected: 'Všechna připojení aktivní.',
        connectionFailed: 'Připojení k {{value}} selhalo.', // value = name of websocket
        connectionSuccessful: 'Úspěšně připojeno k {{value}}.', // value = name of websocket
        isOffline: 'OpenEMS je ve stavu offline!',
        toEnergymonitor: 'Do Monitoringu energetických toků…',
    },
    Edge: {
        Index: {
            Energymonitor: {
                activePower: 'Činný výkon',
                consumptionWarning: 'Spotřeba & neznámá výroba',
                gridMeter: 'Elektroměr - Odběr',
                productionMeter: 'Elektroměr - Výroba',
                reactivePower: 'Jalový výkon',
                storage: 'Úložiště',
                storageCharge: 'baterie nakládání',
                storageDischarge: 'baterie výtok',
                title: 'Monitoring energetických toků',
            },
            Widgets: {
                autarchyInfo: 'Autarky označuje procento aktuální energie, kterou lze pokrýt vybitím z výroby a skladování.',
                phasesInfo: 'Součet jednotlivých fází se může z technických důvodů mírně lišit od celkového počtu.',
                selfconsumptionInfo: 'Vlastní spotřeba označuje procento aktuálně generovaného výstupu, který lze použít přímou spotřebou a samotným zatížením úložiště.',
                twoWayInfoGrid: 'Negative Werte entsprechen Netzeinspeisung, Positive Werte entsprechen Netzbezug',
                twoWayInfoStorage: 'Negative Werte entsprechen Speicher Beladung, Positive Werte entsprechen Speicher Entladung',
                Channeltreshold: {
                    output: 'Výstup'
                },
                Singlethreshold: {
                    above: 'O',
                    behaviour: 'Chování',
                    below: 'Níže',
                    currentValue: 'Aktuální hodnota',
                    dependendOn: 'Podle toho',
                    minSwitchingTime: 'Minimální přepínací',
                    other: 'Ostatní',
                    relationError: 'Prahová hodnota musí být větší než spínané zatížení',
                    switchedLoadPower: 'Spínané zatížení',
                    switchOffAbove: 'Vypněte pomocí',
                    switchOffBelow: 'Vypněte pod',
                    switchOnAbove: 'Zapněte přes',
                    switchOnBelow: 'Zapněte pod',
                    threshold: 'Prahována',
                },
                Peakshaving: {
                    asymmetricInfo: 'Zadané hodnoty výkonu se vztahují k jednotlivým fázím. Je nastavena na nejvíce namáhanou fázi.',
                    mostStressedPhase: 'Většinou stresovaná fáze',
                    peakshaving: 'špičkové holení',
                    peakshavingPower: 'Uvolnění',
                    rechargePower: 'Načítání pod',
                    relationError: 'Mez vypouštění musí být větší nebo rovna limitu zatížení',
                },
                CHP: {
                    highThreshold: 'vysoký práh',
                    lowThreshold: 'Nízký práh',
                },
                EVCS: {
                    activateCharging: 'Aktivujte nabíjecí stanici',
                    amountOfChargingStations: 'Počet nabíjecích stanic',
                    cable: 'Kabel',
                    cableNotConnected: 'Kabel není připojen',
                    carFull: 'Auto je plné',
                    chargeLimitReached: 'Bylo dosaženo limitu nabíjení',
                    chargeMode: 'režim načítání',
                    chargeTarget: 'Cíl nabíjení',
                    charging: 'Se nabíjí',
                    chargingLimit: 'Omezení nabíjení',
                    chargingPower: 'Nabíjecí výkon',
                    chargingStation: 'Nabíjecí stanice',
                    chargingStationCluster: 'Klastr nabíjecí stanice',
                    chargingStationDeactivated: 'Nabíjecí stanice byla deaktivována',
                    chargingStationPluggedIn: 'Nabíjecí stanice zapojena',
                    chargingStationPluggedInEV: 'Nabíjecí stanice + e-car připojené',
                    chargingStationPluggedInEVLocked: 'Nabíjecí stanice + e-car připojené + uzamčena',
                    chargingStationPluggedInLocked: 'Nabíjecí stanice zapojena + uzamčena',
                    clusterConfigError: 'V konfiguraci clusteru Evcs došlo k chybě',
                    currentCharge: 'Aktuální nabíjení',
                    energieSinceBeginning: 'Energie od posledního začátku nabíjení',
                    energyLimit: 'Limit energie',
                    enforceCharging: 'Prosazování poplatků',
                    error: 'Chyba',
                    maxEnergyRestriction: 'Omezte maximální energii na jedno nabití',
                    notAuthorized: 'Neautorizovaný',
                    notCharging: 'Nenabíjí se',
                    notReadyForCharging: 'Není připraven k nabíjení',
                    overviewChargingStations: 'Přehled nabíjecích stanic',
                    prioritization: 'Stanovení priorit',
                    readyForCharging: 'Připraven k nabíjení',
                    starting: 'Začínající',
                    status: 'Postavení',
                    totalCharge: 'Celkový poplatek',
                    totalChargingPower: 'Celkový nabíjecí výkon',
                    unknown: 'Neznámý',
                    unplugged: 'Odpojena',
                    Administration: {
                        carAdministration: 'Správa aut',
                        customCarInfo: 'V takovém případě lze vaše vozidlo načíst efektivně pouze z určitého výkonu. Toto tlačítko je součástí vašich možností konfigurace a také automatického načítání.',
                        renaultZoe: 'Je na této nabíjecí stanici naložen hlavně Renault Zoe?'
                    },
                    NoConnection: {
                        description: 'Nelze jej připojit k nabíjecí stanici.',
                        help1_1: 'Při opětovném zapnutí se objeví IP nabíjecí stanice',
                        help1: 'Zkontrolujte, zda je nabíjecí stanice zapnutá a zda je dostupná prostřednictvím sítě',
                    },
                    OptimizedChargeMode: {
                        info: 'V tomto režimu je zatížení vozidla přizpůsobeno aktuální výrobě a spotřebě.',
                        minChargePower: 'nakládací sazba',
                        minCharging: 'Garance minimálního poplatku',
                        minInfo: 'Pokud chcete zabránit tomu, aby se auto nenabíjelo v noci, můžete nastavit minimální poplatek.',
                        name: 'Optimalizované zatížení',
                        shortName: 'automaticky',
                        ChargingPriority: {
                            car: 'Car',
                            info: 'V závislosti na prioritizaci bude vybraná komponenta načtena jako první',
                            storage: 'Storage'
                        }
                    },
                    ForceChargeMode: {
                        info: 'V tomto režimu je vynuceno zatížení vozidla, i. je vždy zaručeno, že vozidlo bude nabíjeno, i když nabíjecí stanice potřebuje přístup k síti.',
                        maxCharging: 'Maximální síla náboje',
                        maxChargingDetails: 'Pokud vůz nemůže načíst zadanou maximální hodnotu, je výkon automaticky omezen.',
                        name: 'Nucené nakládání',
                        shortName: 'Ruční',
                    }
                },
                Heatingelement: {
                    activeLevel: 'Aktivní level',
                    endtime: 'Poslední dny',
                    energy: 'Energie',
                    heatingelement: 'Topný článek',
                    minimalEnergyAmount: 'Minimální množství energie',
                    minimumRunTime: 'Minimální doba',
                    priority: 'Priorita',
                    time: 'čas',
                    timeCountdown: 'Čas začít',
                }
            }
        },
        History: {
            activeDuration: 'aktivní trvání',
            beginDate: 'Vyberte datum zahájení',
            day: 'Den',
            endDate: 'Vyberte datum ukončení',
            export: 'stáhnout jako soubor programu Excel',
            go: 'Jdi!',
            lastMonth: 'Poslední měsíc',
            lastWeek: 'Poslední týden',
            lastYear: 'Poslední rok',
            month: 'Měsíc',
            noData: 'data nejsou k dispozici',
            otherPeriod: 'Další období',
            period: 'Období',
            selectedDay: '{{value}}',
            selectedPeriod: 'Zvolené období: ',
            today: 'Dnes',
            week: 'Týden',
            year: 'Rok',
            yesterday: 'Včera',
            sun: 'Ned',
            mon: 'Pon',
            tue: 'Úte',
            wed: 'Stř',
            thu: 'Čtv',
            fri: 'Pát',
            sat: 'Sob',
            jan: 'Led',
            feb: 'Úno',
            mar: 'Bře',
            apr: 'Dub',
            may: 'Kvě',
            jun: 'ČeN',
            jul: 'ČeC',
            aug: 'Srp',
            sep: 'Zář',
            oct: 'Říj',
            nov: 'Lis',
            dec: 'Pro',
        },
        Config: {
            Index: {
                addComponents: 'Komponenten installieren',
                adjustComponents: 'Komponenten konfigurieren',
                bridge: 'Připojená zařízení',
                controller: 'Aplikace',
                dataStorage: 'Ukládání dat',
                executeSimulator: 'Zahájit simulaci',
                liveLog: 'Live log systému',
                log: 'Log',
                manualControl: 'Manuální ovládání',
                renameComponents: 'Přejmenovat Komponenty',
                scheduler: 'Plánovač aplikací',
                simulator: 'Simulátor',
                systemExecute: 'Spusťte příkaz systému',
                systemProfile: 'Systémový Profil',
            },
            More: {
                manualCommand: 'Manuální příkaz ',
                manualpqPowerSpecification: 'Specifikace výkonu',
                manualpqReset: 'Reset',
                manualpqSubmit: 'Zadání',
                refuInverter: 'REFU Střídač',
                refuStart: 'Start',
                refuStartStop: 'Start/Stop střídače',
                refuStop: 'Stop',
                send: 'Odeslat',
            },
            Scheduler: {
                always: 'Vždy',
                class: 'Třída:',
                contact: 'Došlo k chybě. Prosím kontaktujte <a href=\'mailto:{{value}}\'>{{value}}</a>.',
                newScheduler: 'Nový plánovač...',
                notImplemented: 'Zadání nebylo implementováno: ',
            },
            Log: {
                automaticUpdating: 'Automatický update',
                level: 'Úroveň',
                message: 'Zpráva',
                source: 'Zdroj',
                timestamp: 'Časové razítko',
            },
            Controller: {
                app: 'App:',
                internallyID: 'Vnitřní ID:',
                priority: 'Priorita:',
            },
            Bridge: {
                newConnection: 'Nové připojení...',
                newDevice: 'Nové zařízení...',
            },
            Kaco: {
                ChangePassword: "Change inverter password",
                EnterNewPassword: "Enter new inverter password",
                UpdatePassword: "Update password",
                UpdateSuccess: "Succesfully updated password!",
                UpdateError: "Error updating the password"
            }
        }
    },
    About: {
        build: 'Aktuální verze',
        contact: 'S případnými návrhy a pro další informace k systému prosím kontaktujte náš tým na <a href=\'mailto:{{value}}\'>{{value}}</a>.',
        currentDevelopments: 'Aktuální vývoj',
        developed: 'Toto uživatelské rozhraní bylo vyvinuto jako open-source software.',
        language: 'Zvolte jazyk:',
        sourcecode: 'Zdrojový kód',
        ui: 'Uživatelské rozhraní pro OpenEMS',
    },
    Notifications: {
        authenticationFailed: 'Žádné připojení: Ověření uživatele selhalo.',
        closed: 'Připojení ukončeno.',
        failed: 'Připojení selhalo.',
        loggedIn: 'Přihlášení proběhlo úspěšně.',
        loggedInAs: 'Uživatel přihlášen jako {{value}}.', // value = username
    },
    KacoError: {
        Errors: "Chyba / Varování"
    },
    KacoUpdate: {
        NewSoftware: "K dispozici je nová verze softwaru hy-control!",
        NewUi: "K dispozici je nová verze uživatelského rozhraní hy-control!",
        Update: "Aktualizace",
        OpenLocal: "Otevřete místní hy-control a postupujte podle pokynů.",
        Success1: "<p>Aktualizace uživatelského rozhraní byla úspěšná!</p><p>Zavřete prosím uživatelské rozhraní a znovu jej otevřete.</p>",
        Success2: "<p>Aktualizace softwaru byla úspěšná!</p><p>Software se nyní restartuje. Může trvat několik minut, než tento software znovu použijete.</p>",
        Success3: "<p>Aktualizace softwaru a uživatelského rozhraní byla úspěšná!</p><p>Software se nyní restartuje. Může trvat několik minut, než tento software znovu použijete.</p>",
        Error1: "<p>Během aktualizace uživatelského rozhraní došlo k chybě. Zkuste to znovu při příštím otevření uživatelského rozhraní. </p>",
        Error2: "<p>Během aktualizace softwaru došlo k chybě. Zkuste to znovu při příštím otevření uživatelského rozhraní. </p>",
        Error3: "<p>Během aktualizace softwaru a uživatelského rozhraní došlo k chybě. Zkuste to znovu při příštím otevření uživatelského rozhraní.</p>",
        IsUpdating: "Aktualizace probíhá. Nezavírejte prosím toto okno!",
        Step1: "Stahování aktualizace uživatelského rozhraní ...",
        Step2: "Vytváření zálohy ...",
        Step3: "Nainstalujte aktualizaci uživatelského rozhraní ...",
        Step4: "Stahování aktualizace softwaru ...",
        Step5: "Instalace aktualizace softwaru ...",
        Step6: "Obnovení zálohy ...",
    }
}
