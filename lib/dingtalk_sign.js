const crypto = require('crypto');

const DingTalkSign = function (suiteSecret) {
  this.suiteSecret = suiteSecret;
};

/**
 * 获取签名
 *
 * @param {String} timestamp    时间戳
 * @param {String} nonce        随机数
 * @param {String} encrypt      加密后的文本
 */
DingTalkSign.prototype.getSignature = function(timestamp, suiteTicket) {
    var hmac = crypto.createHmac('sha256', this.suiteSecret);
    var arr = [timestamp, suiteTicket].sort();
    const str = arr.join('\n');
    console.log('getSignature', str);
    hmac.update(str);
    return hmac.digest('base64');
};

module.exports = DingTalkSign;
