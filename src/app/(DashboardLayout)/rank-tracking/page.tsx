'use client'
import Grid from '@mui/material/Grid';
import { Box, Stack, Typography, Divider, Chip, Button, Paper, LinearProgress, Avatar, IconButton } from '@mui/material';
import { IconPlus, IconWorld, IconUsers, IconShare2, IconLink } from '@tabler/icons-react';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const RankTrackingPage = () => {
  const keywordBands = [
    { label: 'No rank', value: 0 },
    { label: '51+', value: 0 },
    { label: '21–50', value: 0 },
    { label: '11–20', value: 0 },
    { label: '4–10', value: 19, delta: '+19' },
    { label: '1–3', value: 37, delta: '+37' },
  ];

  return (
    <PageContainer title="Rank Tracking (Per Project)" description="Ahrefs-style light overview">
      <Box>
        <DashboardCard
          title={
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 44, height: 44 }} variant="rounded">
                GS
              </Avatar>
              <Stack spacing={0.2}>
                <Typography variant="h6" fontWeight={700}>
                  Giftstation
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <IconLink size={14} />
                  <Typography variant="body2" color="textSecondary">
                    https://www.giftstation.co.nz/
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          }
          subtitle="Rank tracking overview"
          action={
            <Stack direction="row" spacing={1} alignItems="center">
              <Chip size="small" label="Basic" />
              <IconButton size="small">
                <IconShare2 size={16} />
              </IconButton>
            </Stack>
          }
        >
          <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Stack spacing={0.75} sx={{ height: '100%' }}>
                  <Typography variant="subtitle2" color="textSecondary">Share of Voice</Typography>
                  <Stack direction="row" spacing={1} alignItems="baseline">
                    <Typography variant="h4">18.8%</Typography>
                    <Typography variant="body2" color="success.main">+18.8%</Typography>
                  </Stack>
                  <Typography variant="caption" color="textSecondary">SoTV: 8.9%</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3} sx={{ borderLeft: { md: '1px solid', xs: 'none' }, borderColor: 'divider', pl: { md: 2 } }}>
                <Stack spacing={0.75} sx={{ height: '100%' }}>
                  <Typography variant="subtitle2" color="textSecondary">Average position</Typography>
                  <Stack direction="row" spacing={1} alignItems="baseline">
                    <Typography variant="h4">3.1</Typography>
                  </Stack>
                  <Typography variant="caption" color="textSecondary">Best: 2.4 • Worst: 5.6</Typography>
                  <Typography variant="caption" color="textSecondary">Change (7d): -0.1</Typography>
                  <Stack spacing={0.25}>
                    <Typography variant="body2">Top movers</Typography>
                    <Typography variant="caption" color="textSecondary">+1: gift cards online</Typography>
                    <Typography variant="caption" color="textSecondary">-1: buy itunes voucher</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3} sx={{ borderLeft: { md: '1px solid', xs: 'none' }, borderColor: 'divider', pl: { md: 2 } }}>
                <Stack spacing={0.75} sx={{ height: '100%' }}>
                  <Typography variant="subtitle2" color="textSecondary">Traffic</Typography>
                  <Stack direction="row" spacing={1} alignItems="baseline">
                    <Typography variant="h4">4K</Typography>
                    <Typography variant="body2" color="success.main">+4K</Typography>
                  </Stack>
                  <Typography variant="caption" color="textSecondary">Value: $3.4K</Typography>
                  <Typography variant="caption" color="textSecondary">Clicks: 3.2K • Impr: 92K</Typography>
                  <Typography variant="caption" color="textSecondary">CTR: 3.5% • CPC: $0.24</Typography>
                  <Stack spacing={0.25}>
                    <Typography variant="body2">Top pages</Typography>
                    <Typography variant="caption" color="textSecondary">/gift-cards — 1.2K</Typography>
                    <Typography variant="caption" color="textSecondary">/itunes — 850</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3} sx={{ borderLeft: { md: '1px solid', xs: 'none' }, borderColor: 'divider', pl: { md: 2 } }}>
                <Stack spacing={0.75} sx={{ height: '100%' }}>
                  <Typography variant="subtitle2" color="textSecondary">Keywords</Typography>
                  <Stack direction="row" spacing={1} alignItems="baseline">
                    <Typography variant="h4">56</Typography>
                    <Typography variant="body2" color="success.main">▲ 0</Typography>
                    <Typography variant="body2" color="error.main">▼ 0</Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Paper>

          <Paper variant="outlined" sx={{ p: { xs: 2, md: 3 }, mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Typography variant="subtitle2" color="textSecondary" mb={1}>Rank distribution</Typography>
                <Stack spacing={1.5}>
                  {keywordBands.map((band) => (
                    <Stack key={band.label} direction="row" justifyContent="space-between" alignItems="center">
                      <Typography variant="body2">{band.label}</Typography>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="body2">{band.value}</Typography>
                        {band.delta ? <Typography variant="body2" color="success.main">{band.delta}</Typography> : null}
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={12} md={4} sx={{ borderLeft: { md: '1px solid', xs: 'none' }, borderColor: 'divider', pl: { md: 2 } }}>
                <Stack spacing={2}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconUsers size={16} />
                    <Typography variant="subtitle2" color="textSecondary">Competitors</Typography>
                  </Stack>
                  <Button startIcon={<IconPlus size={16} />} variant="outlined" size="small">
                    Add
                  </Button>
                  <Divider />
                  <Stack direction="row" spacing={1} alignItems="center">
                    <IconWorld size={16} />
                    <Typography variant="subtitle2" color="textSecondary">Locations</Typography>
                  </Stack>
                  <Typography variant="h6">1</Typography>
                </Stack>
              </Grid>
            </Grid>
          </Paper>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
};

export default RankTrackingPage;




