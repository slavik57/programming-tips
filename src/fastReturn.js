"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fetchBooks(username, userDAL, booksDAL) {
    if (!username) {
        throw "you should pass the username";
    }
    if (!userDAL) {
        throw "you should pass the userDAL";
    }
    if (!booksDAL) {
        throw "you should pass the booksDAL";
    }
    const user = userDAL.fetchUser(username);
    if (!user) {
        return [];
    }
    const books = booksDAL.fetchBooks(user.id);
    if (!books) {
        return [];
    }
    return books.map(book => book.name);
}
function shouldSqlBeLogged(sql) { }
exports.shouldSqlBeLogged = shouldSqlBeLogged;
function buildSqlTimingDump(spy, execTime, methodCall, sql, someBoolean) { }
exports.buildSqlTimingDump = buildSqlTimingDump;
function sqlTimingOccured(spy, execTime, methodCall, sql) {
    if (exports.sqlTimingLogger.isErrorEnabled() && (!exports.DriverSpy.dumpSqlFilteringOn || shouldSqlBeLogged(sql))) {
        if (exports.DriverSpy.sqlTimingErrorThresholdEnabled && execTime >= exports.DriverSpy.sqlTimingErrorThresholdMsec) {
            exports.sqlTimingLogger.error(buildSqlTimingDump(spy, execTime, methodCall, sql, exports.sqlTimingLogger.isDebugEnabled()));
        }
        else if (exports.sqlTimingLogger.isWarnEnabled()) {
            if (exports.DriverSpy.sqlTimingWarnThresholdEnabled && execTime >= exports.DriverSpy.sqlTimingWarnThresholdMsec) {
                exports.sqlTimingLogger.warn(buildSqlTimingDump(spy, execTime, methodCall, sql, exports.sqlTimingLogger.isDebugEnabled()));
            }
            else if (exports.sqlTimingLogger.isDebugEnabled()) {
                exports.sqlTimingLogger.debug(buildSqlTimingDump(spy, execTime, methodCall, sql, true));
            }
            else if (exports.sqlTimingLogger.isInfoEnabled()) {
                exports.sqlTimingLogger.info(buildSqlTimingDump(spy, execTime, methodCall, sql, false));
            }
        }
    }
}
function sqlTimingOccuredRefactored(spy, execTime, methodCall, sql) {
    if (!exports.sqlTimingLogger.isErrorEnabled()) {
        return;
    }
    if (exports.DriverSpy.dumpSqlFilteringOn && !shouldSqlBeLogged(sql)) {
        return;
    }
    const message = buildSqlTimingDump(spy, execTime, methodCall, sql, exports.sqlTimingLogger.isDebugEnabled());
    if (exports.DriverSpy.sqlTimingErrorThresholdEnabled && execTime >= exports.DriverSpy.sqlTimingErrorThresholdMsec) {
        exports.sqlTimingLogger.error(message);
        return;
    }
    if (!exports.sqlTimingLogger.isWarnEnabled()) {
        return;
    }
    if (exports.DriverSpy.sqlTimingWarnThresholdEnabled && execTime >= exports.DriverSpy.sqlTimingWarnThresholdMsec) {
        exports.sqlTimingLogger.warn(message);
        return;
    }
    if (exports.sqlTimingLogger.isDebugEnabled()) {
        exports.sqlTimingLogger.debug(message);
        return;
    }
    if (exports.sqlTimingLogger.isInfoEnabled()) {
        exports.sqlTimingLogger.info(message);
    }
}
