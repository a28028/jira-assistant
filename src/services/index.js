import { injectable, inject } from './injector-service';
import AjaxService from './ajax-service';
import AnalyticsService from './analytics-service';
import AppBrowserService from './appbrowser-service';
import AuthService from './auth-service';
import BookmarkService from './bookmark-service';
import CacheService from './cache-service';
import CalendarService from './calendar-service';
import ConfigService from './config-service';
import DashboardService from './dashboard-service';
import DataTransformService from './datatransform-service';
import DatabaseService from './database-service';
import JiraService from './jira-service';
import MessageService from './message-service';
import ReportService from './report-service';
import ReportConfigService from './reportconfig-service';
import SessionService from './session-service';
import SuggestionService from './suggestion-service';
import TicketService from './ticket-service';
import UserService from './user-service';
import UserGroupService from './usergroups-service';
import UserUtilsService from './userutils-service';
import UtilsService from './utils-service';
import WorklogService from './worklog-service';

export { inject };

export default function injectServices() {
    injectable(AjaxService, "$ajax");
    injectable(AnalyticsService, "$analytics");
    injectable(AppBrowserService, "$jaBrowserExtn");
    injectable(AuthService, "$auth");
    injectable(BookmarkService, "$bookmark");
    injectable(CacheService, "$cache");
    injectable(CalendarService, "$calendar");
    injectable(ConfigService, "$config");
    injectable(DashboardService, "$dashboard");
    injectable(DataTransformService, "$transform");
    injectable(DatabaseService, "$db");
    injectable(JiraService, "$jira");
    injectable(MessageService, "$message");
    injectable(ReportService, "$report");
    injectable(ReportConfigService, "$reportConfig");
    injectable(SessionService, "$session");
    injectable(SuggestionService, "$suggestion");
    injectable(TicketService, "$ticket");
    injectable(UserService, "$user");
    injectable(UserGroupService, "$usergroup");
    injectable(UserUtilsService, "$userutils");
    injectable(UtilsService, "$utils");
    injectable(WorklogService, "$worklog");
}