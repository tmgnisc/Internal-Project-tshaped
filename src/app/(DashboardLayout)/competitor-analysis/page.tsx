'use client'
import { Box, Grid, Stack, Typography, Chip, LinearProgress, Divider } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const CompetitorAnalysisPage = () => {
  const competitors = [
    { name: 'Ahrefs', traffic: 82, backlinks: 91, content: 88 },
    { name: 'Semrush', traffic: 79, backlinks: 86, content: 84 },
    { name: 'Moz', traffic: 68, backlinks: 73, content: 72 },
    { name: 'Custom Tool', traffic: 54, backlinks: 61, content: 58 },
  ];

  const gapNotes = [
    'Topics: Missing “link building outreach” cluster vs Ahrefs.',
    'SERP Features: Fewer snippets on “keyword research template”.',
    'Links: Competitors earn EDU links via studies—add one research piece.',
  ];

  return (
    <PageContainer title="Competitor Analysis" description="Compare traffic, links, and content posture">
      <Box>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <DashboardCard title="Competitor Benchmarks" subtitle="Relative strength (0-100)">
              <Stack spacing={3}>
                {competitors.map((row) => (
                  <Stack key={row.name} spacing={1.5}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Chip label={row.name} size="small" />
                        <Typography variant="caption" color="textSecondary">Traffic / Links / Content</Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle2">Traffic</Typography>
                        <Typography variant="subtitle2">{row.traffic}</Typography>
                      </Stack>
                      <LinearProgress variant="determinate" value={row.traffic} />
                    </Stack>
                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle2">Backlinks</Typography>
                        <Typography variant="subtitle2">{row.backlinks}</Typography>
                      </Stack>
                      <LinearProgress variant="determinate" value={row.backlinks} />
                    </Stack>
                    <Stack spacing={1}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography variant="subtitle2">Content</Typography>
                        <Typography variant="subtitle2">{row.content}</Typography>
                      </Stack>
                      <LinearProgress variant="determinate" value={row.content} />
                    </Stack>
                    <Divider />
                  </Stack>
                ))}
              </Stack>
            </DashboardCard>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <DashboardCard title="Gap Analysis" subtitle="Quick wins">
              <Stack spacing={2}>
                {gapNotes.map((note) => (
                  <Stack key={note} spacing={0.5}>
                    <Typography variant="body2">{note}</Typography>
                  </Stack>
                ))}
              </Stack>
            </DashboardCard>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default CompetitorAnalysisPage;

