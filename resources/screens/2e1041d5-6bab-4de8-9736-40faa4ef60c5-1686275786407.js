jQuery("#simulation")
  .on("click", ".s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4f91eba-f8f8-444a-8ff7-9eea316b536c",
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
    } else if(jFirer.is("#s-BgType")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e1041d5-6bab-4de8-9736-40faa4ef60c5"
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
    } else if(jFirer.is("#s-Attach")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Attachment" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e1041d5-6bab-4de8-9736-40faa4ef60c5"
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
    } else if(jFirer.is("#s-Send")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "chatDialogs-Susan",
                    "fields": {
                      "dcc8df29-b644-469a-8f7a-d89fa7dd0719": null,
                      "f7065f9c-760d-41eb-8f24-042c7e4d0bfa": null,
                      "803a32e0-32f0-48dc-ac37-f3bb81daf0fe": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","8" ]
                      },
                      "28bdc38c-5e12-4d80-8112-60e301493397": null,
                      "9868e91a-9bea-41d0-8d80-a9a6f7a893c7": "is typing...",
                      "e1c62fe3-294f-4dd3-a09e-9b745183d7b6": null,
                      "e5a9b496-3144-4f90-8167-57c7b03744df": null
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
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "chatDialogs-Susan",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "9868e91a-9bea-41d0-8d80-a9a6f7a893c7"
                        },"is typing..." ]
                      }
                    },
                    "fields": {
                      "dcc8df29-b644-469a-8f7a-d89fa7dd0719": null,
                      "f7065f9c-760d-41eb-8f24-042c7e4d0bfa": null,
                      "803a32e0-32f0-48dc-ac37-f3bb81daf0fe": null,
                      "28bdc38c-5e12-4d80-8112-60e301493397": null,
                      "9868e91a-9bea-41d0-8d80-a9a6f7a893c7": {
                        "datatype": "variable",
                        "element": "autoDialogSelected"
                      },
                      "e1c62fe3-294f-4dd3-a09e-9b745183d7b6": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","8" ]
                      },
                      "e5a9b496-3144-4f90-8167-57c7b03744df": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 1200
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-cameraIcon")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Attachment" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2e1041d5-6bab-4de8-9736-40faa4ef60c5"
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
    } else if(jFirer.is(".s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Attachment .s-Image_1" ],
                    "attributes": {
                      "opacity": "0.5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Attachment .s-Image_1" ],
                    "attributes": {
                      "opacity": "1.0"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
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
                    "variable": [ "imageSelected" ],
                    "value": {
                      "datatype": "gridcell",
                      "datamaster": "fullGallery",
                      "element": "#s-Attachment"
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
                    "variable": [ "imageAttached" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "datatype": "variable",
                        "element": "imageSelected",
                        "value": {
                          "field": "867e967a-f54e-4d1e-8051-54695cac8d97"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "chatDialogs-Eli",
                    "fields": {
                      "d36a6ed6-f369-48f0-9861-8f26a73bb34e": null,
                      "f216efeb-c289-4e1d-add4-8cc291d49518": null,
                      "ea8a6068-3acd-4739-8ca8-0e196571fa9f": null,
                      "e94fd649-1402-4f0c-bb4c-c917a2f9f525": null,
                      "3b1ac6b1-9177-458f-8426-d5a02acc0646": null,
                      "1698d507-f648-411a-a453-1cf742063d4b": null,
                      "441c6735-df86-441f-a130-a047a393fe8c": {
                        "datatype": "variable",
                        "element": "imageAttached"
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Attachment" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 500,
                      "direction": "up"
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
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-chatDialogsProcess" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "380"
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
                    "target": [ ".s-Image_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "right"
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
                    "target": [ "#s-chatDialogsProcess" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "chatDialogs-Eli"
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Path_1" ],
                    "axis": "scrolly",
                    "effect": {
                      "type": "none",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Menu")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e4f91eba-f8f8-444a-8ff7-9eea316b536c",
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
    } else if(jFirer.is("#s-Bg_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Bg_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E3F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Bg_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Bg_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Bg_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E3F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Bg_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
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
    } else if(jFirer.is("#s-Bg_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Bg_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E8E3F9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 #s-Bg_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-More_Menu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
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
    }
  })
  .on("pageload", ".s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-chatContainer")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Path_1" ],
                    "axis": "scrolly",
                    "effect": {
                      "type": "none",
                      "easing": "swing",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-contactPhoto")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-contactPhoto" ],
                    "value": {
                      "datatype": "variable",
                      "element": "chatPicSelected"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-contactPhoto" ],
                    "effect": {
                      "type": "bounce",
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
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-contactName")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-contactName" ],
                    "value": {
                      "datatype": "variable",
                      "element": "chatNameSelected"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-contactName","#s-contactStatus" ],
                    "effect": {
                      "type": "slide",
                      "easing": "easeInCubic",
                      "duration": 500,
                      "direction": "down"
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
    }
  })
  .on("focusin", ".s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-chatInputText")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-ramdonValue" ],
                    "value": {
                      "action": "jimMultiply",
                      "parameter": [ {
                        "action": "jimRandom"
                      },"100" ]
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
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-ramdonValue",
                  "property": "jimGetValue"
                },"20" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "autoDialogSelected" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "chatAutoResponses",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
                            },"are" ]
                          }
                        },
                        "value": {
                          "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"11" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"40" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "autoDialogSelected" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "chatAutoResponses",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
                            },"could" ]
                          }
                        },
                        "value": {
                          "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"41" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"60" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "autoDialogSelected" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "chatAutoResponses",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
                            },"oh!" ]
                          }
                        },
                        "value": {
                          "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"61" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"80" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "autoDialogSelected" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "chatAutoResponses",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
                            },"please" ]
                          }
                        },
                        "value": {
                          "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimGreaterOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"81" ]
                },{
                  "action": "jimLessOrEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-ramdonValue",
                    "property": "jimGetValue"
                  },"100" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "autoDialogSelected" ],
                    "value": {
                      "action": "jimSelectData",
                      "parameter": {
                        "action": "jimFilterData",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "chatAutoResponses",
                          "value": {
                            "action": "jimContains",
                            "parameter": [ {
                              "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
                            },"don't" ]
                          }
                        },
                        "value": {
                          "field": "33cd7911-a48b-4962-bdc3-25df8c155d38"
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
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-chatInputText")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimCreateData",
                  "parameter": {
                    "datatype": "datamaster",
                    "datamaster": "chatDialogs-Eli",
                    "fields": {
                      "d36a6ed6-f369-48f0-9861-8f26a73bb34e": {
                        "datatype": "property",
                        "target": "#s-Image_3",
                        "property": "jimGetValue"
                      },
                      "f216efeb-c289-4e1d-add4-8cc291d49518": {
                        "datatype": "property",
                        "target": "#s-chatInputText",
                        "property": "jimGetValue"
                      },
                      "ea8a6068-3acd-4739-8ca8-0e196571fa9f": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","8" ]
                      },
                      "e94fd649-1402-4f0c-bb4c-c917a2f9f525": {
                        "datatype": "property",
                        "target": "#s-contactPhoto",
                        "property": "jimGetValue"
                      },
                      "3b1ac6b1-9177-458f-8426-d5a02acc0646": "is typing...",
                      "1698d507-f648-411a-a453-1cf742063d4b": null,
                      "441c6735-df86-441f-a130-a047a393fe8c": null
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
                    "target": [ "#s-chatInputText" ],
                    "value": ""
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
                    "target": [ "#s-chatDialogsProcess" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "chatDialogs-Eli"
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
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": [ "#s-Path_1" ],
                    "axis": "scrolly",
                    "effect": {
                      "type": "none",
                      "easing": "swing",
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
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "chatDialogs-Eli",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "3b1ac6b1-9177-458f-8426-d5a02acc0646"
                        },"is typing..." ]
                      }
                    },
                    "fields": {
                      "d36a6ed6-f369-48f0-9861-8f26a73bb34e": null,
                      "f216efeb-c289-4e1d-add4-8cc291d49518": null,
                      "ea8a6068-3acd-4739-8ca8-0e196571fa9f": null,
                      "e94fd649-1402-4f0c-bb4c-c917a2f9f525": null,
                      "3b1ac6b1-9177-458f-8426-d5a02acc0646": {
                        "datatype": "variable",
                        "element": "autoDialogSelected"
                      },
                      "1698d507-f648-411a-a453-1cf742063d4b": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","8" ]
                      },
                      "441c6735-df86-441f-a130-a047a393fe8c": null
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 1200
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-chatDialogsProcess" ],
                    "value": {
                      "datatype": "datamaster",
                      "datamaster": "chatDialogs-Eli"
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
    }
  })
  .on("swipeleft", ".s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Grid_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNextPageData",
                  "parameter": {
                    "target": [ "#s-Attachment" ]
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
  .on("swiperight", ".s-2e1041d5-6bab-4de8-9736-40faa4ef60c5 .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is(".s-Grid_cell_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPrevPageData",
                  "parameter": {
                    "target": [ "#s-Attachment" ]
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