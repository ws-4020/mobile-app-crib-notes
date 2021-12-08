package jp.fintan.mobile.santokuapp.presentation.restapi.team;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.stream.Collectors;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import jp.fintan.mobile.santokuapp.application.service.timetable.TimetableStartService;
import jp.fintan.mobile.santokuapp.domain.model.team.TeamId;
import jp.fintan.mobile.santokuapp.domain.model.timetable.Timetable;
import jp.fintan.mobile.santokuapp.domain.model.timetable.TimetableId;
import nablarch.core.repository.di.config.externalize.annotation.SystemRepositoryComponent;
import nablarch.fw.ExecutionContext;
import nablarch.fw.web.HttpRequest;

@SystemRepositoryComponent
@Path("/teams/{teamId}/timetables/{timetableId}")
public class TimetableStartAction {

  private final TimetableStartService timetableStartService;

  public TimetableStartAction(TimetableStartService timetableStartService) {
    this.timetableStartService = timetableStartService;
  }

  @PUT
  @Produces(MediaType.APPLICATION_JSON)
  public TimetableStartResponse start(HttpRequest request, ExecutionContext context) {
    TeamId teamId = new TeamId(request.getParam("teamId")[0]);
    TimetableId timetableId = new TimetableId(request.getParam("timetableId")[0]);
    final Timetable timetable = timetableStartService.start(teamId, timetableId);
    return new TimetableStartResponse(timetable);
  }

  public static class TimetableStartResponse {

    public final String timetableId;

    public final String timetableName;

    public final LocalDate timetableDate;

    public final ZonedDateTime timetableStartedAt;

    public final List<PeriodResponse> periodList;

    public TimetableStartResponse(Timetable timetable) {
      this.timetableId = timetable.timetableId().value();
      this.timetableName = timetable.timetableName().value();
      this.timetableDate = timetable.timetableDate().value();
      this.timetableStartedAt = timetable.timetableStartedAt().value();
      this.periodList =
          timetable.periodList().value().stream()
              .map(
                  period ->
                      new PeriodResponse(
                          period.timeBoxName().value(),
                          period.startTime().value(),
                          period.endTime().value()))
              .collect(Collectors.toList());
    }
  }

  public static class PeriodResponse {
    public final String timeBoxName;

    public final LocalTime startTime;

    public final LocalTime endTime;

    public PeriodResponse(String timeBoxName, LocalTime startTime, LocalTime endTime) {
      this.timeBoxName = timeBoxName;
      this.startTime = startTime;
      this.endTime = endTime;
    }
  }
}
