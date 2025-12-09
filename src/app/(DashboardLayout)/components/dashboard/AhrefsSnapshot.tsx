'use client'
import { Box, Grid, Stack, Typography, Divider } from '@mui/material';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

type Metric = {
  label: string;
  value: string;
  delta?: string;
  sublabel?: string;
  subdelta?: string;
};

const AhrefsSnapshot = () => {
  const aiCitations: Metric[] = [
    { label: 'AI Overview', value: '7', delta: '+3', sublabel: 'Pages', subdelta: '+3' },
    { label: 'ChatGPT', value: '12', delta: '+2', sublabel: 'Pages', subdelta: '+14' },
    { label: 'Perplexity', value: '22', delta: '+1', sublabel: 'Pages', subdelta: '+1' },
    { label: 'Gemini', value: '12', delta: '+4', sublabel: 'Pages', subdelta: '+6' },
    { label: 'Copilot', value: '12', delta: '+1', sublabel: 'Pages', subdelta: '+4' },
  ];

  const backlinkProfile: Metric[] = [
    { label: 'DR', value: '51', delta: undefined, sublabel: 'AR 609,537', subdelta: '▼14,874' },
    { label: 'UR', value: '5' },
    { label: 'Backlinks', value: '22.2K', delta: '▼5.4K', sublabel: 'All time 276K' },
    { label: 'Ref. domains', value: '1.4K', delta: '▼87', sublabel: 'All time 3.8K' },
  ];

  const search: Metric[] = [
    { label: 'Organic keywords', value: '1.1K', delta: '+25', sublabel: 'Top 3 420', subdelta: '+22' },
    { label: 'Organic traffic', value: '19.4K', delta: '+742', sublabel: 'Value $3.3K', subdelta: '+9' },
    { label: 'Paid keywords', value: '75', delta: '+19', sublabel: 'Ads 123', subdelta: '+24' },
    { label: 'Paid traffic', value: '488', delta: '▼330', sublabel: 'Cost $63', subdelta: '▼36' },
  ];

  const renderMetric = (metric: Metric) => (
    <Stack spacing={0.5} key={metric.label}>
      <Typography variant="body2" color="textSecondary">
        {metric.label}
      </Typography>
      <Stack direction="row" spacing={1} alignItems="baseline">
        <Typography variant="h5">{metric.value}</Typography>
        {metric.delta ? (
          <Typography variant="body2" color={metric.delta.includes('▼') ? 'error.main' : 'success.main'}>
            {metric.delta}
          </Typography>
        ) : null}
      </Stack>
      {metric.sublabel ? (
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="caption" color="textSecondary">
            {metric.sublabel}
          </Typography>
          {metric.subdelta ? (
            <Typography variant="caption" color={metric.subdelta.includes('▼') ? 'error.main' : 'success.main'}>
              {metric.subdelta}
            </Typography>
          ) : null}
        </Stack>
      ) : null}
    </Stack>
  );

  return (
    <DashboardCard title="Snapshot" subtitle="Modeled after Ahrefs panels">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', p: 2.5, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">AI citations</Typography>
              <Divider />
              <Grid container spacing={2}>
                {aiCitations.map((m) => (
                  <Grid key={m.label} size={{ xs: 6, sm: 4 }}>
                    {renderMetric(m)}
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', p: 2.5, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Backlink profile</Typography>
              <Divider />
              <Grid container spacing={2}>
                {backlinkProfile.map((m) => (
                  <Grid key={m.label} size={{ xs: 6 }}>
                    {renderMetric(m)}
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ bgcolor: 'background.paper', color: 'text.primary', p: 2.5, borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
            <Stack spacing={2}>
              <Typography variant="subtitle1">Search</Typography>
              <Divider />
              <Grid container spacing={2}>
                {search.map((m) => (
                  <Grid key={m.label} size={{ xs: 6 }}>
                    {renderMetric(m)}
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default AhrefsSnapshot;

