'use client'
import { Box, Stack, Typography, Divider, List, ListItem, ListItemText, Button } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const KeywordResearchPage = () => {
  const backlog = [
    'Collect fresh keywords from SERP competitors',
    'Group by intent and funnel stage',
    'Prioritize by volume, difficulty, and business fit',
    'Export briefs to content ops',
  ];

  return (
    <PageContainer title="Keyword Research" description="Research pipeline per project">
      <Box>
        <DashboardCard title="Keyword Research" subtitle="Pipeline and exports">
          <Stack spacing={3}>
            <Typography variant="body2" color="textSecondary">
              Track research tasks, keep clusters organized, and send briefs to writers or LLMs.
            </Typography>
            <Divider />
            <List dense>
              {backlog.map((item) => (
                <ListItem key={item} disableGutters>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button variant="contained">Start New Research</Button>
              <Button variant="outlined">Export Briefs</Button>
            </Stack>
          </Stack>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
};

export default KeywordResearchPage;

