'use client'
import { Box, Stack, Typography, Divider, List, ListItem, ListItemText, LinearProgress } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const RankTrackingPage = () => {
  const tiers = [
    { label: 'Top 3', current: 18, total: 30 },
    { label: 'Top 10', current: 42, total: 60 },
    { label: 'Top 20', current: 68, total: 90 },
  ];

  const actions = [
    'Refresh declining URLs with new briefs',
    'Ship internal links to target clusters',
    'Compare SERP features vs. competitors',
  ];

  return (
    <PageContainer title="Rank Tracking (Per Project)" description="Keyword rank posture per project">
      <Box>
        <DashboardCard title="Rank Tracking" subtitle="SERP coverage and next moves">
          <Stack spacing={3}>
            <Stack spacing={2}>
              {tiers.map((tier) => {
                const percent = Math.round((tier.current / tier.total) * 100);
                return (
                  <Stack key={tier.label} spacing={1}>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="subtitle2">{tier.label}</Typography>
                      <Typography variant="subtitle2">{tier.current}/{tier.total}</Typography>
                    </Stack>
                    <LinearProgress variant="determinate" value={percent} />
                  </Stack>
                );
              })}
            </Stack>
            <Divider />
            <Typography variant="subtitle1">Planned actions</Typography>
            <List dense>
              {actions.map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Stack>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
};

export default RankTrackingPage;


