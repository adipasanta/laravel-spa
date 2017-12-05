<template>
    <div id="dashboard-content">
        <main class="column">
            <div class="level">
                <div class="level-left">
                    <div class="level-item">
                        <div class="title">Dashboard</div>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <button type="button" class="button is-small">
                        March 8, 2017 - April 6, 2017
                        </button>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column">
                    <div class="box notification is-primary">
                        <div class="heading">Top Seller Total</div>
                        <div class="title">56,950</div>
                        <div class="level">
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Sales $</div>
                                    <div class="title is-5">250K</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Overall $</div>
                                    <div class="title is-5">750K</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Sales %</div>
                                    <div class="title is-5">25%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box notification is-warning">
                        <div class="heading">Revenue / Expenses</div>
                        <div class="title">55% / 45%</div>
                        <div class="level">
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Rev Prod $</div>
                                    <div class="title is-5">30%</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Rev Serv $</div>
                                    <div class="title is-5">25%</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Exp %</div>
                                    <div class="title is-5">45%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box notification is-info">
                        <div class="heading">Feedback Activity</div>
                        <div class="title">78% ↑</div>
                        <div class="level">
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Pos</div>
                                    <div class="title is-5">1560</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Neg</div>
                                    <div class="title is-5">368</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Pos/Neg %</div>
                                    <div class="title is-5">77% / 23%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="box notification is-danger">
                        <div class="heading">Orders / Returns</div>
                        <div class="title">75% / 25%</div>
                        <div class="level">
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Orders $</div>
                                    <div class="title is-5">425K</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Returns $</div>
                                    <div class="title is-5">106K</div>
                                </div>
                            </div>
                            <div class="level-item">
                                <div class="">
                                    <div class="heading">Success %</div>
                                    <div class="title is-5">+ 28,5%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-multiline">
                <div class="column is-6">
                    <div class="panel">
                        <p class="panel-heading">
                            Chart - Bar Style (Chart.js)
                        </p>
                        <div class="panel-block">
                            <div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                </div>
                            </div>
                            <canvas id="chartBar" width="733" height="733" style="display: block; width: 733px; height: 733px;" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>
                <div class="column is-6">
                    <div class="panel">
                        <p class="panel-heading">
                            Chart - Line Style (Chart.js)
                        </p>
                        <div class="panel-block">
                            <div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                </div>
                            </div>
                            <canvas id="chartLine" width="733" height="733" style="display: block; width: 733px; height: 733px;" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>
                <div class="column is-6">
                    <div class="panel">
                        <p class="panel-heading">
                            Chart - Doughnut Style (Chart.js)
                        </p>
                        <div class="panel-block">
                            <div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                </div>
                            </div>
                            <canvas id="chartDoughnut" width="733" height="733" style="display: block; width: 733px; height: 733px;" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>
                <div class="column is-6">
                    <div class="panel">
                        <p class="panel-heading">
                            Chart - Scatter Style (Chart.js)
                        </p>
                        <div class="panel-block">
                            <div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                </div>
                            </div>
                            <canvas id="chartScatter" width="733" height="733" style="display: block; width: 733px; height: 733px;" class="chartjs-render-monitor"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>