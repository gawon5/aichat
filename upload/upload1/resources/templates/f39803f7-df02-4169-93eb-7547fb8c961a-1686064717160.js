jQuery("#simulation")
  .on("click", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#t-Slidemenu" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#t-cover" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "timed",
                  "delay": 500
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
    } else if(jFirer.is("#t-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EFEFEF"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-cover" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4f91eba-f8f8-444a-8ff7-9eea316b536c",
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
    } else if(jFirer.is("#t-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EFEFEF"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "left"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 span" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "left"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_3 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "left",
                      "text-decoration": "none",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-size": "14.0pt",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
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
    } else if(jFirer.is("#t-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EFEFEF"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "left"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 span" ],
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "transparent"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 .valign" ],
                    "attributes": {
                      "vertical-align": "middle",
                      "text-align": "left"
                    }
                  },{
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#FFFFFF",
                      "text-align": "left",
                      "text-decoration": "none",
                      "font-family": "'Roboto-Regular_wgt400',Arial",
                      "font-size": "14.0pt",
                      "font-weight": "400",
                      "font-stretch": "normal"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Image_17 svg" ],
                    "attributes": {
                      "overlay": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-cover" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/55d32c7d-ced9-42af-b60f-763265513d21",
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
    } else if(jFirer.is("#t-Menu_close")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-cover" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#t-Slidemenu" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-360"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
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
    } else if(jFirer.is("#t-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#t-cover" ],
                    "effect": {
                      "type": "fade",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#t-Slidemenu" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "-360"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
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
  })
  .on("windowscroll", ".t-f39803f7-df02-4169-93eb-7547fb8c961a .windowscroll", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#t-Menu" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "29"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": true
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
    } else if(jFirer.is("#t-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#t-Slidemenu" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": true
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
    } else if(jFirer.is("#t-cover")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#t-cover" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false
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
  });