jQuery("#simulation")
  .on("click", ".s-55d32c7d-ced9-42af-b60f-763265513d21 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Delete")) {
      cases = [
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
                      "datamaster": "fullGallery",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "2be55de0-b1f5-4aa4-92a4-8a5534f4456f"
                        },{
                          "action": "jimNot",
                          "parameter": [ null ]
                        } ]
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
  .on("pageload", ".s-55d32c7d-ced9-42af-b60f-763265513d21 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-55d32c7d-ced9-42af-b60f-763265513d21")) {
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
                      "background-color": "#FFFFFF"
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
                      "color": "#6F6FDB",
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
                    "target": [ "#t-f39803f7-df02-4169-93eb-7547fb8c961a #t-Image_17 svg" ],
                    "attributes": {
                      "overlay": "#6F6FDB"
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
    }
  });