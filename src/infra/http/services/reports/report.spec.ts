import { Report } from '@domain/Reports/Reports';
import { ReportService } from './reports.service';
import { InMemoryReportRepository } from '@test/repositories/in-memory-report-repository';

describe('Report', () => {
  class ReportRepositoryMock {
    async register(report: any): Promise<string> {
      return 'valid_report_id';
    }

    async findReportById(reportId: string): Promise<any> {
      return {
        id: 'valid_report_id',
        title: 'Valid Report',
        content: 'This is a valid report.',
      };
    }

    async deleteReport(
      reportId: string,
      reportingUserId: string,
    ): Promise<void> {
      // Mock implementation for deleteReport
    }
  }

  it('should register a new report', async () => {
    const reportRepository = new InMemoryReportRepository();
    const reportService = new ReportService(reportRepository);

    const newReport = new Report({
      reportingUserId: 'user_id_1',
      reportedUserId: 'user_id_3',
      messageId: 'message_id_1',
      reason: 'This is a valid reason.',
    });

    if (!newReport.props) {
      throw new Error('Error creating new report');
    }

    const reportId = await reportService.createReport(newReport.props);

    expect(reportId).toBe('valid_report_id');
    expect(reportRepository.reports[0]).toEqual(newReport.props);
  });

  it('should throw BadRequestException if invalid report data is provided', async () => {
    const reportRepository = new ReportRepositoryMock();
    const reportService = new ReportService(reportRepository);

    const newReport = new Report({
      reportingUserId: 'any_text',
      reportedUserId: 'any_text',
      messageId: 'any_text',
      reason: 'any_text',
    });

    try {
      await reportService.createReport(newReport.props);
      fail('Expected BadRequestException, but no exception was thrown');
    } catch (error) {
      expect(error).toBe('Invalid report data');
      expect(error).toBe(400);
    }
  });

  it('should find a report by id', async () => {
    const reportRepository = new ReportRepositoryMock();
    const reportService = new ReportService(reportRepository);

    const reportId = 'valid_report_id';
    const report = await reportService.findReportById(reportId);

    expect(report).toBeDefined();
    expect(report).toBe('valid_report_id');
    expect(report).toBe('Valid Report');
    expect(report).toBe('This is a valid report.');
  });

  it('should throw BadRequestException if invalid report id is provided', async () => {
    const reportRepository = new ReportRepositoryMock();
    const reportService = new ReportService(reportRepository);

    const invalidReportId = 'invalid_report_id';

    try {
      await reportService.findReportById(invalidReportId);
      fail('Expected BadRequestException, but no exception was thrown');
    } catch (error) {
      expect(error).toBe('Invalid report id');
      expect(error).toBe(400);
    }
  });

});
