jQuery("#simulation")
  .on("click", ".s-9f6cf84b-e7cd-4901-806f-985b56ff1097 .click", function(event, data) {
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
                    "target": "screens/9f6cf84b-e7cd-4901-806f-985b56ff1097"
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
                    "target": "screens/9f6cf84b-e7cd-4901-806f-985b56ff1097"
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Attachment .s-Image_1" ],
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Attachment .s-Image_1" ],
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
                    "datamaster": "chatDialogs-Adam",
                    "fields": {
                      "67861565-3990-4d13-959a-7d6c95279391": null,
                      "d6a67139-a429-4bea-a8a0-4824b220dab4": null,
                      "4f490544-5651-4cab-98d9-a4b9879945ef": null,
                      "25455ad9-a9b1-49d8-91cf-6d519d54e25d": null,
                      "addf331f-6e54-4c38-9086-5e79689e029b": null,
                      "acfc17ae-3fd8-4504-a025-ec5272c98f4f": null,
                      "ac281708-b91b-4ae5-b78f-261c32ba8f98": {
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
                      "datamaster": "chatDialogs-Susan"
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Bg_2 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Bg_2 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Bg_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Bg_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Bg_4 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-9f6cf84b-e7cd-4901-806f-985b56ff1097 #s-Bg_4 > .backgroundLayer > .colorLayer" ],
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
  .on("pageload", ".s-9f6cf84b-e7cd-4901-806f-985b56ff1097 .pageload", function(event, data) {
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
  .on("focusin", ".s-9f6cf84b-e7cd-4901-806f-985b56ff1097 .focusin", function(event, data) {
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
  .on("focusout", ".s-9f6cf84b-e7cd-4901-806f-985b56ff1097 .focusout", function(event, data) {
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
                    "datamaster": "chatDialogs-Adam",
                    "fields": {
                      "67861565-3990-4d13-959a-7d6c95279391": {
                        "datatype": "property",
                        "target": "#s-Image_3",
                        "property": "jimGetValue"
                      },
                      "d6a67139-a429-4bea-a8a0-4824b220dab4": {
                        "datatype": "property",
                        "target": "#s-chatInputText",
                        "property": "jimGetValue"
                      },
                      "4f490544-5651-4cab-98d9-a4b9879945ef": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","8" ]
                      },
                      "25455ad9-a9b1-49d8-91cf-6d519d54e25d": {
                        "datatype": "property",
                        "target": "#s-contactPhoto",
                        "property": "jimGetValue"
                      },
                      "addf331f-6e54-4c38-9086-5e79689e029b": "is typing...",
                      "acfc17ae-3fd8-4504-a025-ec5272c98f4f": null,
                      "ac281708-b91b-4ae5-b78f-261c32ba8f98": null
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
                      "datamaster": "chatDialogs-Adam"
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
                      "datamaster": "chatDialogs-Adam",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "addf331f-6e54-4c38-9086-5e79689e029b"
                        },"is typing..." ]
                      }
                    },
                    "fields": {
                      "67861565-3990-4d13-959a-7d6c95279391": null,
                      "d6a67139-a429-4bea-a8a0-4824b220dab4": null,
                      "4f490544-5651-4cab-98d9-a4b9879945ef": null,
                      "25455ad9-a9b1-49d8-91cf-6d519d54e25d": null,
                      "addf331f-6e54-4c38-9086-5e79689e029b": {
                        "datatype": "variable",
                        "element": "autoDialogSelected"
                      },
                      "acfc17ae-3fd8-4504-a025-ec5272c98f4f": {
                        "action": "jimSubstring",
                        "parameter": [ {
                          "action": "jimSystemTime"
                        },"0","8" ]
                      },
                      "ac281708-b91b-4ae5-b78f-261c32ba8f98": null
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
                      "datamaster": "chatDialogs-Adam"
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
  .on("swipeleft", ".s-9f6cf84b-e7cd-4901-806f-985b56ff1097 .swipeleft", function(event, data) {
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
  .on("swiperight", ".s-9f6cf84b-e7cd-4901-806f-985b56ff1097 .swiperight", function(event, data) {
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