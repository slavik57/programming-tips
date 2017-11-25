function fetchBooks(username, userDAL, booksDAL) {
  if (!username) {
    throw "you should pass the username"
  }
  if (!userDAL) {
    throw "you should pass the userDAL";
  }
  if (!booksDAL) {
    throw "you should pass the booksDAL"
  }        
  const user = userDAL.fetchUser(username);
  if (!user) {
    return []
  }
  const books = booksDAL.fetchBooks(user.id);
  if (!books) {
    return []
  }
  return books.map(book => book.name);
}

export let DriverSpy;
export function shouldSqlBeLogged(sql) {}
export function buildSqlTimingDump(spy, execTime, methodCall, sql, someBoolean) {}
export let sqlTimingLogger;

function sqlTimingOccured(spy, execTime, methodCall, sql) {
  if (sqlTimingLogger.isErrorEnabled() && (!DriverSpy.dumpSqlFilteringOn || shouldSqlBeLogged(sql))) {
    if (DriverSpy.sqlTimingErrorThresholdEnabled && execTime >= DriverSpy.sqlTimingErrorThresholdMsec) {
      sqlTimingLogger.error(buildSqlTimingDump(spy,execTime,methodCall,sql,sqlTimingLogger.isDebugEnabled()));
    } else if (sqlTimingLogger.isWarnEnabled()) {
      if (DriverSpy.sqlTimingWarnThresholdEnabled && execTime >= DriverSpy.sqlTimingWarnThresholdMsec) {
        sqlTimingLogger.warn(buildSqlTimingDump(spy, execTime, methodCall, sql, sqlTimingLogger.isDebugEnabled()));
      } else if (sqlTimingLogger.isDebugEnabled()) {
        sqlTimingLogger.debug(buildSqlTimingDump(spy, execTime, methodCall, sql, true));
      } else if (sqlTimingLogger.isInfoEnabled()) {
        sqlTimingLogger.info(buildSqlTimingDump(spy, execTime, methodCall, sql, false));
      }
    }
  }
}

function sqlTimingOccuredRefactored(spy, execTime, methodCall, sql) {
  if (!sqlTimingLogger.isErrorEnabled()) {
    return;
  } 
  if (DriverSpy.dumpSqlFilteringOn && !shouldSqlBeLogged(sql)) {
    return;
  }
  const message = buildSqlTimingDump(spy,execTime,methodCall, sql, sqlTimingLogger.isDebugEnabled());
  if (DriverSpy.sqlTimingErrorThresholdEnabled && execTime >= DriverSpy.sqlTimingErrorThresholdMsec) {
    sqlTimingLogger.error(message);
    return;
  } 
  if (!sqlTimingLogger.isWarnEnabled()) {
    return;
  }
  if (DriverSpy.sqlTimingWarnThresholdEnabled && execTime >= DriverSpy.sqlTimingWarnThresholdMsec) {
    sqlTimingLogger.warn(message);
    return;
  } 
  if (sqlTimingLogger.isDebugEnabled()) {
    sqlTimingLogger.debug(message);
    return;
  } 
  if (sqlTimingLogger.isInfoEnabled()) {
    sqlTimingLogger.info(message);
  }
}
