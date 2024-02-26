import { StyleSheet } from "react-native";
import { Colors } from "../Theme/Variables";

export class Utils {
  static shadowBg = StyleSheet.create({
    v1: {
      shadowColor: Colors.neutralGray03,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.43,
      shadowRadius: 4,
    },
  });

  static checkSpacing = (string) => (/\s/g.test(string) ? true : false);

  static reMapRow = (_data, min, max) => {
    const __data = [];
    for (var i = min; i < max; i++) {
      __data.push(_data[i].id);
    }
    return __data;
  };

  static addSpacer = ({ windowWidth, usedSpace, boxSize, dataLength }) => {
    const n = Math.floor((windowWidth - usedSpace) / boxSize);
    const modulus = dataLength % n;
    const renderSpacer = (_n) =>
      [...Array(_n)].map((_, i) => <Spacer key={i} width={boxSize} />);

    switch (n) {
      case 4:
        switch (modulus) {
          case 3:
            return renderSpacer(1);
          case 2:
            return renderSpacer(2);
        }
        break;
      case 5:
        switch (modulus) {
          case 4:
            return renderSpacer(1);
          case 3:
            return renderSpacer(2);
          case 2:
            return renderSpacer(3);
        }
        break;
    }
  };

  static matchRow = (data, item) => {
    if (
      item.id ==
      data.find((e) => {
        if (e == item.id) return e;
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  static filterRowData = (data, min, max) => {
    return data.filter((_, i) => i >= min && i < max);
  };

  static findElement = (data, i) =>
    data.find((e) => e == i) != undefined ? true : false;

  static filterRowDataId = (data, min, max) => {
    return data
      .filter((_, i) => i >= min && i < max)
      .map((e, i) => {
        // console.log('E', e.id);
        return e.id;
      });
  };

  static getFirstWord = (data = String) => {
    const _first = data.split(" ")[0];
    const _count = _first.length;

    if (_count > 12) {
      return _first.substring(0, 12) + "...";
    } else if (_count > 0 && _count <= 12) {
      return _first;
    } else {
      return "";
    }
  };

  static noAva = (data) => {
    return isEmptyNullOrUndefined(data) ? Assets.noAvaImg : data;
  };

  static limitNameWord = (data = String) => {
    const _word = data.split(" ").length;
    const _char = data.replace(/ /g, "").length + 1;

    if (_word > 19 && _char > 132) {
      return data.substring(0, 132) + "...";
    } else if (_word > 19 && _char <= 132) {
      return data;
    } else if (_word <= 19 && _char > 132) {
      return data.substring(0, 132) + "...";
    } else if (_word <= 19 && _char <= 132) {
      return data;
    }
  };

  static checkStringNConvert = (data) => {
    return isString(data) ? data : toString(data);
  };

  static reMapLocString = (data = String) => {
    return data.replace(/\s*,\s*/g, ",").split(",");
  };

  static debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  static validateOnlyNumbers(number) {
    const re = /^[0-9\b]+$/;
    return re.test(number);
  }

  static isString = (param) => {
    return Object.prototype.toString.call(param) === "[object String]";
  };

  static isEmptyNullOrUndefined = (param) => {
    if (param === undefined) {
      return true;
    }
    if (param === null) {
      return true;
    }

    if (param === "") {
      return true;
    }

    if (isString(param)) {
      return param.replace(/\s+/g, "") === "";
    }
    return false;
  };

  static numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  static numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(0) + "rb"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(0) + "jt"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  static isExpired = (unix) => {
    return unix * 1000 < Date.now();
  };

  static logProps = (props) => {
    return console.log(
      "🏘🏘🏘",
      "\n\nROUTE:",
      props.route,
      "\n\nROUTE_PARAMS:",
      props.route.param,
      "\n\nRAW,",
      props
    );
  };

  static logSuccess = (success) => {
    return console.log(
      "✅✅✅",
      "\n\nDATA:",
      success.data,
      "\n\nREQUEST:",
      success.request,
      "\n\nHEADER:",
      success.header
    );
  };

  static logError = (error) => {
    return console.log(
      "🚨🚨🚨",
      "\n\nDATA:",
      error.data,
      "\n\nREQUEST:",
      error.request,
      "\n\nHEADER:",
      error.status
    );
  };
}
