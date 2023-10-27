import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ReactApexChart from 'react-apexcharts';
import { useTheme } from '@mui/material/styles';

function CustomerBar() {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      animations: {
        speed: 400,
        animateGradually: {
          enabled: false,
        },
      },
      fontFamily: 'inherit',
      foreColor: 'inherit',
      height: '140%',
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    colors: ['#ff5b5b', '#B794F4', 'red'],
    labels: ['Label 1', 'Label 2', 'Label 3'],
    plotOptions: {
      pie: {
        customScale: 0.9,
        expandOnClick: false,
        donut: {
          size: '60%',
        },
      },
    },
    stroke: {
      colors: [theme.palette.background.paper],
    },
    series: [20, 45, 35],
    states: {
      hover: {
        filter: {
          type: 'none',
        },
      },
      active: {
        filter: {
          type: 'none',
        },
      },
    },
    tooltip: {
      enabled: true,
      fillSeriesColor: false,
      theme: 'dark',
      custom: ({ seriesIndex, w }) =>
        `<div class="flex items-center h-32 min-h-32 max-h-23 px-12">
          <div class="w-12 h-12 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
          <div class="ml-8 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
          <div class="ml-8 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
        </div>`,
    },
  };

  return (
    <Paper
      className='flex flex-col flex-auto shadow rounded-2xl overflow-hidden p-24'
      sx={{ width: '55%' }}
    >
      <div className='flex flex-col sm:flex-row items-start justify-between'>
        <Typography
          className='text-lg font-medium tracking-tight leading-6 truncate'
          sx={{
            fontWeight: 'bold',
            padding: '14px 0px 0px 14px',
          }}
        >
          Customers
        </Typography>
        <div className='ml-8'>
          <Typography
            variant='caption'
            display='block'
            gutterBottom
            sx={{
              paddingLeft: '14px',
            }}
          >
            Customers that buy products
          </Typography>
        </div>
      </div>

      <div className='flex flex-col flex-auto mt-24 h-192'>
        <ReactApexChart
          className='flex flex-auto items-center justify-center w-full h-full'
          options={chartOptions}
          series={chartOptions.series}
          type={chartOptions.chart.type}
          height={chartOptions.chart.height}
        />
      </div>
      <div className='flex flex-col sm:flex-row items-start justify-between'>
        <Typography
          className='text-lg font-medium tracking-tight leading-6 truncate'
          sx={{
            fontWeight: 'bold',
            padding: '14px 0px 0px 14px',
          }}
        >
          65%
        </Typography>
        <div className='ml-8'>
          <Typography
            variant='caption'
            display='block'
            gutterBottom
            sx={{
              paddingLeft: '14px',
            }}
          >
            Total New Customers
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default CustomerBar;
