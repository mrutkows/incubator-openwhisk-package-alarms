const TRIGGER_DB_SUFFIX = 'alarmservice';
const DEFAULT_MAX_TRIGGERS = -1;
const RETRY_ATTEMPTS = 10;
const RETRY_DELAY = 1000; //in milliseconds

module.exports = {
    TRIGGER_DB_SUFFIX: TRIGGER_DB_SUFFIX,
    DEFAULT_MAX_TRIGGERS: DEFAULT_MAX_TRIGGERS,
    RETRY_ATTEMPTS: RETRY_ATTEMPTS,
    RETRY_DELAY: RETRY_DELAY
};
