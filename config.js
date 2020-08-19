module.exports = {
  "/map/v1/stop-map": {
    "source": `otpstops://${process.env.OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/citybike-map": {
    "source": `otpcitybikes://${process.env.OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=60"
    }
  },
  "/map/v1/parking-map": {
    "source": `hbparking://`,
    "headers": {
      "Cache-Control": "public,max-age=120"
    }
  },
}
