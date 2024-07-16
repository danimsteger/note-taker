// Creates log statements to show what methods are being done and where they are being done

const check = (req, res, next) => {
  switch (req.method) {
    case "GET": {
      console.info(`📗 ${req.method} request to ${req.path}`);
      break;
    }
    case "POST": {
      console.info(`📘 ${req.method} request to ${req.path}`);
      break;
    }
    default:
      console.log(`📙 ${req.method} request to ${req.path}`);
  }

  next();
};

exports.check = check;
