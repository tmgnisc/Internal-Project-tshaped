'use client'
import { Box, Stack, Typography, Divider, List, ListItem, ListItemText, Chip, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const LlmTrackingPage = () => {
  const streams = [
    { name: 'Content briefs', status: 'Healthy' },
    { name: 'Internal tools', status: 'Review' },
    { name: 'Customer chatbot', status: 'Watch' },
  ];

  return (
    <PageContainer title="LLM Tracking (Per Project)" description="Track LLM usage, prompts, and drift">
      <Box>
        <DashboardCard title="LLM Tracking" subtitle="Per-project visibility">
          <Stack spacing={3}>
            <Typography variant="body2" color="textSecondary">
              Monitor prompts, spend, and output quality for every project. Keep an eye on drift before it hits production.
            </Typography>
            <Divider />
            <Stack spacing={1.5}>
              {streams.map((stream) => (
                <Stack key={stream.name} direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="subtitle1">{stream.name}</Typography>
                  <Chip
                    label={stream.status}
                    color={
                      stream.status === 'Healthy' ? 'success' :
                        stream.status === 'Review' ? 'warning' : 'error'
                    }
                    size="small"
                  />
                </Stack>
              ))}
            </Stack>
            <Divider />
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained">View Logs</Button>
              <Button variant="outlined">Update Guardrails</Button>
            </Stack>
          </Stack>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
};

export default LlmTrackingPage;



