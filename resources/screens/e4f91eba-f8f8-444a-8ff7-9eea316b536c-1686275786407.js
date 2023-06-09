jQuery("#simulation")
  .on("click", ".s-e4f91eba-f8f8-444a-8ff7-9eea316b536c .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatNameSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "chatPicSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Image_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactChatSelected" ],
                    "value": {
                      "datatype": "property",
                      "target": ".s-Input_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactChatSelected"
                },"A아이키우미" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4d3ffd13-479c-4907-9f75-833dcabed79b",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactChatSelected"
                },"Thomas Hawkings" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f31fc3aa-6694-4a0a-aa92-3d874a872912",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactChatSelected"
                },"Adam Black" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9f6cf84b-e7cd-4901-806f-985b56ff1097",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactChatSelected"
                },"Eli Johnson" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/21018314-2ab1-47fa-8d94-47e6173afd76",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactChatSelected"
                },"Emily Stewart" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e1041d5-6bab-4de8-9736-40faa4ef60c5",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is(".s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ ".s-selecticon_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_4" ],
                    "value": "false"
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-chats .s-Grid_cell_1 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-chats .s-Grid_cell_1 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactsCheckOff" ],
                    "value": {
                      "action": "jimMinus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "contactsCheckOff"
                      },"1" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "contactsCheckOff"
                },"0" ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_Search" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-Fill_82 svg" ],
                    "attributes": {
                      "overlay": "#7070DB"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-Fill_81 svg" ],
                    "attributes": {
                      "overlay": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-Fill_82 svg" ],
                    "attributes": {
                      "overlay": ""
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-Fill_81 svg" ],
                    "attributes": {
                      "overlay": ""
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true,
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Delete")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "chatsList",
                    "fields": {
                      "59479e20-05cb-49c8-825e-759ec48b1175": null,
                      "bf4ea873-49ef-481b-ab03-236e71b59567": null,
                      "8196ae44-aa8b-410b-8912-b25b67afb311": null,
                      "9abc43c3-6ffc-4451-a442-a3e476a76023": {
                        "datatype": "property",
                        "target": ".s-Input_4",
                        "property": "jimGetValue"
                      },
                      "3bb856d5-bb3f-426b-966d-a37088029368": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_Search" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimDeleteData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "chatsList",
                      "value": {
                        "field": "9abc43c3-6ffc-4451-a442-a3e476a76023"
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-chats" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "chatsList"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Input_2",".s-Input_3",".s-Input_8",".s-Image_1",".s-Path_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-e4f91eba-f8f8-444a-8ff7-9eea316b536c .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-ShowSearch")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-InputSearch" ],
                      "effect": {
                        "type": "slide",
                        "easing": "swing",
                        "duration": 500,
                        "direction": "right"
                      }
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimFocusOn",
                    "parameter": {
                      "target": [ "#s-InputSearchChats" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("keyup.jim", ".s-e4f91eba-f8f8-444a-8ff7-9eea316b536c .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-InputSearchChats")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-chats" ],
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "datatype": "datamaster",
                        "datamaster": "contactsList",
                        "value": {
                          "action": "jimContains",
                          "parameter": [ {
                            "field": "c1952cb6-b03b-4f3b-b06d-59e4fb1c4fc1"
                          },{
                            "datatype": "property",
                            "target": "#s-InputSearchChats",
                            "property": "jimGetValue"
                          } ]
                        }
                      }
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("pageload", ".s-e4f91eba-f8f8-444a-8ff7-9eea316b536c .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Input_2",".s-Input_3" ],
                    "effect": {
                      "type": "slide",
                      "easing": "easeOutCubic",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Path_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Image_1" ],
                    "effect": {
                      "type": "slide",
                      "easing": "easeInCubic",
                      "duration": 500,
                      "direction": "left"
                    }
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-Input_8" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_4 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "left"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_4 span" ],
                    "attributes": {
                      "color": "#7070DB",
                      "text-align": "left",
                      "text-decoration": "none",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-size": "14.0pt",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Image_71 svg" ],
                    "attributes": {
                      "overlay": "#7070DB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-butt_AllContacts" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "460"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "244"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeOutCubic",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-butt_AllContacts" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "477"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "244"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInCubic",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactsCheckOff" ],
                    "value": "0"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("taphold", ".s-e4f91eba-f8f8-444a-8ff7-9eea316b536c .taphold", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ ".s-selecticon_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-chats .s-Grid_cell_1 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-e4f91eba-f8f8-444a-8ff7-9eea316b536c #s-chats .s-Grid_cell_1 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E3F9"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_Options" ]
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ ".s-Input_4" ],
                    "value": "true"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "contactsCheckOff" ],
                    "value": {
                      "action": "jimPlus",
                      "parameter": [ {
                        "datatype": "variable",
                        "element": "contactsCheckOff"
                      },"1" ]
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });