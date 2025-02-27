var APP_DATA = {
  "scenes": [
    {
      "id": "0-sute",
      "name": "SUÍTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7154534952551739,
          "pitch": 0.1468767643278106,
          "rotation": 0,
          "target": "3-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-banheiro",
      "name": "BANHEIRO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0695498639710213,
          "pitch": 0.06775513485381524,
          "rotation": 0,
          "target": "3-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hspedes",
      "name": "HÓSPEDES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.249168417154486,
          "pitch": -0.01609935628652792,
          "rotation": 0,
          "target": "3-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-estar",
      "name": "ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.1243446194464326,
          "pitch": -0.022879360016471395,
          "rotation": 0,
          "target": "0-sute"
        },
        {
          "yaw": -2.095938109114572,
          "pitch": -0.03927316672112546,
          "rotation": 0,
          "target": "2-hspedes"
        },
        {
          "yaw": -0.9747947008505786,
          "pitch": -0.03025048456651902,
          "rotation": 0,
          "target": "1-banheiro"
        },
        {
          "yaw": -2.872313975317592,
          "pitch": -0.019280951138821223,
          "rotation": 0,
          "target": "4-gourmet-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-gourmet-1",
      "name": "GOURMET 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.32950290807696625,
          "pitch": 0.16448840830610223,
          "rotation": 0,
          "target": "5-gourmet-2"
        },
        {
          "yaw": 2.9027130255153297,
          "pitch": 0.28818004956328735,
          "rotation": 0,
          "target": "3-estar"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gourmet-2",
      "name": "GOURMET 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18347574116039134,
          "pitch": 0.12402865452484768,
          "rotation": 0,
          "target": "3-estar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
